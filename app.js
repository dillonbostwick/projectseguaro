var qbws = require('qbws');
var bodyParser = require('body-parser');
var express = require('express');
var http = require('http');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

app.set('port', (process.env.PORT || 5000));

// view engine setup
//app.set('views', path.join(__dirname, 'views'));

////////////////////////////////////
//MIDDLEWARE////////////////////////
////////////////////////////////////

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
// app.use('/', routes);
// app.use('/users', users);

////////////////////////////////////
//ROUTES////////////////////////////
////////////////////////////////////

app.get('/support', function(req, res) {
	console.log("Accessing support route");
});

////////////////////////////////////
//SERVER SETUP//////////////////////
////////////////////////////////////

//qbws takes care of linking the server to the soap at '/wsdl'...
//The server must get passd to qbws.run(server) so that it knows
//where to listen

var server = http.createServer(app);
qbws.run(server);

//module.exports = app;
