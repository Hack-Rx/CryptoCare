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

app.get('/Patient', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/patientinitial.html'));
});

app.get('/Patient/JPg9A2/Dash', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/patientdash.html'));
});

app.get('/Patient/JPg9A2/Teleform', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/teleform.html'));
});

app.get('/Doctor/Dash', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/doctordash.html'));
});
app.listen(3002);

app.use(express.static('public'))
