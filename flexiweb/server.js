var express = require('express');
var app = express();
var path = require('path');


app.listen(3001);

app.use(express.static('public'))
