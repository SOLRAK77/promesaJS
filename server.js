var express = require('express');
var server = express();
var dobyParser = require('body-parser');
var port = 8090;

server.use(express.static(__dirname + '/project'));
server.use(dobyParser.json());
server.use(dobyParser.json({type:'application/vdn.api+json'}));


server.listen(port);
console.log("App listeing  on port" + port);


//application
server.get('*',function(req, res){
    res.sendFile('./project/index.html')
});