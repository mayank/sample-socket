var express = require('express');
var app = express();
var server = require('http').Server(app);

var socketIO = require('socket.io')(server);

app.get('/', (req, res) => {
    res.send('OK');
    socketIO.emit('open');
});

server.listen(8000, console.log);
