var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let mongoose =require('mongoose');
let db = require('./server/config/config');

let chalk = require('chalk');

var app = express();

app.use(logger('dev'));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

let routesV1_0 = require('./server/routes/routes.v1.0');

// require('./server/config/libs/mongoose');//initializing mongoose

let config = require('./server/config/config');
/* CORS ISSUE */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'x-access-token,authorization,Content-Type,Access-Control-Request-Headers,enctype');

// Set to true if you need the website to include cookies in  requests
res.setHeader('Access-Control-Allow-Credentials', true);

if (req.method === 'OPTIONS') {
    res.status(200);
    res.end();
}
else {
//     // Pass to next layer of middleware
    next();
}
});
/* CORS */

app.use('/v1', routesV1_0);

mongoose.connect(db.db.mongo.uri);
app.listen(config.port);

console.log('Server started on port : ' + config.port ); //+ " with " + process.env.NODE_ENV + ' mode'

module.exports = app;