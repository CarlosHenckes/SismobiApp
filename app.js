var express = require('express');
var load = require('express-load');
var path = require('path');
//var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var porta = process.env.PORT || 3000;
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var SerialPort = require('serialport');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

server.listen(porta, () => {
    console.log('server is running...');
  });