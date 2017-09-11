var express = require('express');
var path = require('path');
var save = require('./Routes/save');
var clogin = require('./Routes/clogin');
var app = express();
const pg = require('pg');


var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client')));

app.listen(8888);

app.use('/',save);
app.use('/',clogin);
