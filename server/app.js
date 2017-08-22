var app = require('express')();
var http = require('http').Server(app);
require('./routes')(app);
require('./sockets')(http);

http.listen(3000, function(){
    console.log('listening on *:3000');
});