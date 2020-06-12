var express = require('express');
var app = express();
var path = require('path');

//Routing 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/signin', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/login.html'));
});


app.listen(3002);

app.use(express.static('public'))
