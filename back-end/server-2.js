const io = require('socket.io')();

const PORT = 8000;

io.on('connection', client => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });
});



io.listen(PORT);
console.log('listening on port ', PORT);