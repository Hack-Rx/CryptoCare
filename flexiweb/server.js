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
app.get('/Patient/JPg8A2/Dash', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/patientdash2.html'));
});

app.get('/Patient/JPg7A2/Dash', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/patientdash3.html'));
});

app.get('/Patient/JPg9A2/Teleform', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/teleform.html'));
});

app.get('/Doctor/Mnt22v/Dash', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/doctordash.html'));
});
app.get('/Doctor/Mmt22v/Dash', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/doctordash2.html'));
});

app.get('/Checker/Indigo', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/checkerdash.html'));
});

app.get('/Checker/Indigo/Results', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/checkerresults.html'));
});

app.listen(3002);

app.use(express.static('public'))
