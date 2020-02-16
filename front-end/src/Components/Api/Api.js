import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');


export const subscribeToTimer = callback => {
    socket.on('timer', timestamp => callback(null, timestamp));
    socket.emit('subscribeToTimer', 10000);
}
