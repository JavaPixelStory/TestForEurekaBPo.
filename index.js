var express = require('express');

var app = express();

app.get('/', function(reg, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000);
