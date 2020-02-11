//Require the express moule
const express = require('express')
//create a new express application
const app = express()
//require the http module
const http = require('http').Server(app)
// require the socket.io module
const io = require('socket.io')
// Set-up socket
const socket = io(http);
// Store the port
const port = 5000;


// * ----- Socket.io ----- *
// * --- CONNECTION --- *
socket.on('connection', socket => {
    console.log('user connected')
    socket.on("disconnect", () => {
        console.log('Disconnected')
    })
    // * --- MESSAGES --- *
    socket.on('SendNewMessage', messageData => {
        console.log('message data: ', messageData)
        // Send message to MongoDB
        socket.broadcast.emit('newMessageReceived', messageData)
    })
})


// * ------ LISTEN ----- *
http.listen(port, () => {
    console.log('connected to port: ' + port)
})



// * --- MESSAGES EXEMPLE --- *
// socket.on("chat message", msg => {
//     console.log("message: "  +  msg);
//     // broadcast message to everyone in port:5000 except yourself.
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