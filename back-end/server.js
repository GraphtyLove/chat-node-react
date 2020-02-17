//Require the express moule
const express = require('express')
//create a new express application
const app = express()
//require the http module
var server = app.listen(5000)
// require the socket.io module
const io = require('socket.io').listen(server)
// MongoDB
const MongoClient = require('mongodb').MongoClient
// Load environnement variable located in file '.env'
// see doc: https://github.com/motdotla/dotenv
require('dotenv').config()

// Store all the messages
let messages = []

const dbString = process.env.MONGO_CONNECTION_STRING

MongoClient.connect(dbString, (err, db) => {
    if (err) throw err
    // Get table
    const dbChat = db.db('Chat')
    // * --- Get all MESSAGES --- *
    dbChat.collection('messages').find({}).toArray((err, result) => {
        if (err) throw err
        // Load all messages
        result.map(message => messages.push(message))
        db.close()
        console.log('all messages: ', messages);
    })
})




// * ---------- DB QUERY ---------- *
const findUserWithFacebookId = async id => {
    let response = {}
    const client = await MongoClient.connect(dbString).catch(err => console.log(err))
    if (!client) {
        return None
    }
    try {
        const db = client.db('Chat')
        let collection = db.collection('users')
        let query = { facebookId: id }
        let res = await collection.findOne(query)
        response = res
    } catch (err) {
        console.log(err)
    } finally {
        client.close()
        return response
    }
}

const createNewUser = user => {
    console.log('create user: ', user)
    MongoClient.connect(dbString, (err, db) => {
        if (err) throw err
        const dbChat = db.db('Chat')
        dbChat.collection('users').insertOne(user, (err, res) => {
            if (err) throw err
            console.log('New user added: ', user.name)
        })
        db.close()
    })
}

const sendMessageToDatabase = async message => {
    delete message.facebookId
    const client = await MongoClient.connect(dbString).catch(err => console.log(err))
    if (!client) {
        return None
    }
    try {
        const db = client.db('Chat')
        let collection = db.collection('messages')
        console.log('before send DB: ', message);
        await collection.insertOne(message)
        console.log('message sent to DB');
    } catch (err) {
        console.log(err)
    } finally {
        client.close()
    }
}

const cleanMessageAndEmit = (message, socket) => {
    if (message && message.user) {
        // Create a deep copy of message so we can still send the entire data to the DB
        const messageToSend = JSON.parse(JSON.stringify(message))
        delete messageToSend.user._id
        delete messageToSend.user.facebookId
        socket.broadcast.emit('newMessageReceived', messageToSend)
        console.log('message cleaned and emit!')
    }
}



// * ---------- Socket.io ---------- *
// * --- CONNECTION --- *
io.on('connection', socket => {
    // console.log('user connected')
    // * --- When a user log-in with facebook --- *
    socket.on('userLogin', userReceived => {
        if (userReceived && userReceived.facebookId) {
            findUserWithFacebookId(userReceived.facebookId).then(userDb => {
                if (!userDb) {
                    console.log('User creating...')
                    createNewUser(userReceived)
                }
                else {
                    console.log('user already in the DB!')
                }
                messages && messages.map(message => cleanMessageAndEmit(message, socket))
            })
        }
    })





    socket.on("disconnect", () => {
        console.log('Disconnected')
    })

    // * --- when front send a new message --- *
    socket.on('newMessage', messageData => {
        let messageFormated = {}
        // Search user data and add it to the message
        findUserWithFacebookId(messageData.facebookId).then(userDb => {
            messageFormated = messageData
            messageFormated.user = userDb
            messages.push(messageFormated)
            // Clean message and send it to front
            cleanMessageAndEmit(messageFormated, socket)
            // Send message to MongoDB
            sendMessageToDatabase(messageFormated)
                .then(() => console.log('Message sent to DB'))

        })
    })
})

// * ----- HOME route ----- *
app.get('/', (req, res) => {
    res.send('The server is connected.');
})
