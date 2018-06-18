// setup for webiste

//############################################################//
// SET UP VARIABLES
//############################################################//

// set up express
var express = require('express');
var app = express();
var port = 8000;

// set up path
var path = require("path");

// set up server
var server = require('http').createServer(app);
var io = require('socket.io')(server);



//############################################################//
// SET UP APP
//############################################################//

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'public/html'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
require('./app/routes.js')(app, io);

server.listen(port, "0.0.0.0");

console.log('Server is running on port: ' + port);