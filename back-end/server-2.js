//Require the express moule
const express = require('express')
//create a new express application
const app = express()
//require the http module
const http = require('http').Server(app)
// require the socket.io module
const io = require('socket.io')

const port = 5000;

const socket = io(http);

// * ----- Socket.io ----- *
// CONNECTION
socket.on('connection', socket => {
    console.log('user connected')
    socket.on("disconnect", () => {
        console.log('Disconnected')
    })
})

// MESSAGES
socket.on("chat message", msg => {
    console.log("message: "  +  msg);
    //broadcast message to everyone in port:5000 except yourself.
    socket.broadcast.emit("received", { message: msg })
})




//wire up the server to listen to our port 500
http.listen(port, ()=>{
    console.log('connected to port: ' + port)
})


// !!! Simple exemple with timestamp !!!

// io.on('connection', client => {
//     client.on('subscribeToTimer', (interval) => {
//         console.log('client is subscribing to timer with interval ', interval);
//         setInterval(() => {
//             client.emit('timer', new Date());
//         }, interval);
//     });
// });