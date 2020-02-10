// ---------- Imports ----------
import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import socketIO from 'socket.io';
// File system module
import fs from 'fs'
import util from 'util'


// ---------- App express ----------
const app = express()
const server = express().use(app).listen(5000, () => console.log(`Listening Socket on 5000`));

const io = socketIO(server);


// app.use(cors())
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ---------- Server http ----------
// const server = http.Server(app)

// ---------- SOcket.io ----------
// let io = new SocketIO(server)

// Cors fix
// io.set('origins', 'http://localhost:5000/')

let sockets = {}

io.on('connection', socket => {
    sendMessageToFront(socket)
    socket.on('disconnected', () => console.log('disconnected'))
})

const sendMessageToFront = async socket => {
    try {
        const res = 'SENT FROM SERVER' // Getting the data from DarkSky
        socket.emit("FromAPI", res); // Emitting a new message. It will be consumed by the client
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
}


// ---------- Routes ----------
// * ----- HOME route ----- *
app.get('/', (req, res) => {
    res.send('Hi!');
})


// * ----- Add user route ----- *
// POST request
app.post('/addUser', (req, res) => {
    // Get the body of the request and 
    const userData = req.body

    // Get the 'name' key from the request object
    const userName = userData.name

    // Add user to the Json file
    fs.readFile('db/users.json', (err, data) => {
        // Throw error
        if (err) throw err
        // Success
        // Get data from the Json file
        const jsonFileContent = JSON.parse(data)
        // Add the request value
        jsonFileContent.push(userData)
        // Write the new json in the json file
        fs.writeFile('db/users.json', JSON.stringify(jsonFileContent), 'utf8', err => {
            // Throw error
            if (err) throw err
            //success
            console.log('user added!');
        })

    })
    // Send back an answer to the request
    res.send(`User "${userName}" has been added to the DB.`)
})


// * ----- Search user route ----- *
// POST request
app.post('/searchUser', (req, res) => {
    // Get the 'name' key from the request object
    const userName = req.body.name
    // List of requested users
    const userToReturn = []

    const readFile = util.promisify(fs.readFile)
    readFile("db/users.json")
        .then(
            data => {
                const users = JSON.parse(data)
                for (let i = 0; i < users.length; i++) {
                    if (users[i].name === userName) {
                        userToReturn.push(users[i])
                    }
                }
                if (userToReturn.length >= 1) {
                    res.send(`User "${userName}" well added to the DB!`)
                }
                else {
                    res.send('User not found...')
                }
            })
        .catch(
            err => console.log(err)
        )
})

// app.listen(5000)