var express = require('express');
var server = express.createServer();
server.configure(function(){
        server.use(express.static(__dirname ));
});

server.listen(3000);
console.log('listening on 3000');
