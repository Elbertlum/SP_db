var express = require('express');
var app = express();

app.use('/', express.static('client'));

app.listen(3000, function () {
  console.log('listening on port 3000!');
});