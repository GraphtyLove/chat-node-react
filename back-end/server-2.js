//Require the express moule
const express = require('express')
//create a new express application
const app = express()
//require the http module
var server = app.listen(5000)
// require the socket.io module
const io = require('socket.io').listen(server);

messages = []

// * ----- Socket.io ----- *
// * --- CONNECTION --- *
io.on('connection', socket => {
    console.log('user connected')
    // Send all the messages stored.
    messages && messages.map(message => socket.emit('newMessageReceived', message))

    socket.on("disconnect", () => {
        console.log('Disconnected')
    })
    // * --- MESSAGES --- *
    socket.on('newMessage', messageData => {
        console.log('message data: ', messageData)
        messages.push(messageData)
        // Send message to MongoDB
        socket.broadcast.emit('newMessageReceived', messageData)
    })
})

// * ----- HOME route ----- *
app.get('/', (req, res) => {
    res.send('Hi!');
})



// * --- MESSAGES EXEMPLE --- *
// socket.on("chat message", msg => {
//     console.log("message: "  +  msg);
//      broadcast message to everyone in port:5000 except yourself.
//     socket.broadcast.emit("received", { message: msg })
// })


// !!! Simple exemple with timestamp !!!

// io.on('connection', client => {
//     client.on('subscribeToTimer', (interval) => {
//         console.log('client is subscribing to timer with interval ', interval);
//         setInterval(() => {
//             client.emit('timer', new Date());
//         }, interval);
//     });
// });