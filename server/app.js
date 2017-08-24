var express = require('express');
var app = express();
var http = require('http').Server(app);
require('./routes')(app);
require('./sockets')(http);

app.use(express.static('content'));

http.listen(3000, function(){
    console.log('listening on *:3000');
});