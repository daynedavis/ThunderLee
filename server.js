// set up ======================================================================
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var port  	 = process.env.PORT || 8080;
var passport = require('passport');
var flash = require('connect-flash');
var database = require('./config/database');
var morgan   = require('morgan');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var cookieParser = require('cookie-parser');

// configuration ===============================================================
var options = {
	db: { native_parser: true },
	server: { poolSize: 5 },
	replset: { rs_name: 'myReplicaSetName' },
	user: 'thunderleeclothing',
	pass: 'Harvard321'
};
mongoose.connect(database.url, options);

app.use(express.static(__dirname + '/src'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cookieParser());

// routes ======================================================================
// require('./app/routes.js')(app, passport, nodemailer);
app.get('/*', function(req, res) {
  res.sendfile(__dirname + '/src/index.html');
});
// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
