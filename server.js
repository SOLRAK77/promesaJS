var express = require('express');
var server = express();
var dobyParser = require('body-parser');
var port = 8090;

server.use(express.static(__dirname + '/project'));
server.use(dobyParser.json());
server.use(dobyParser.json({type:'application/vdn.api+json'}));


server.listen(port);
console.log("App listeing  on port" + port);

//user api
server.get('/api/users', function(req, res){
    //call DB

    if(req.query.id !== undefined){
        console.log("Query by ID:" + req.query.id )
        res.json({"id": req.query.id, "name": "Carlos Castillo", "age": 43});
    }
    else{
        var users = [];
        users.push({"name": "Carlos Castillo", "age": 43});
        users.push({"name": "Adriana Ortiz", "age": 41});
        users.push({"name": "Liliana Castillo", "age": 7});
        users.push({"name": "Almendra Arcos", "age": 41});


        var response = {
            "Total Count" : users.length,
            "users": users
        };

        res.json (response);
    }
    
})


//application
server.get('*',function(req, res){
    res.sendFile('./project/index.html')
});