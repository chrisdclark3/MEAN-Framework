var express = require('express');
var app = express();
var port = process.env.PORT || 6789;
var server = require('http').createServer(app);
    server.listen(port);

app.use(express.static('./app/client'));

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host       : 'localhost',
  socketPath : '/tmp/mysql.sock',
  port       : '3306',
  user       : 'root',
  password   : '',
  debug      : true,
});

connection.connect(function (err) {
  if (err) {
    console.log("\n\n\nERROR!!!!");
    console.error('error connecting: ' + err.stack);
    return;
  }
});