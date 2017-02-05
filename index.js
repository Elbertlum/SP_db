require('dotenv').config();

var express = require('express');
var app = express();
var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize
  .authenticate()
  .then(function() {
    console.log('Connection to database established successfully');
  })
  .catch(function(err) {
    console.log('Unable to connect to database: ', err);
  });

app.use('/', express.static('client'));

app.post('/country');

app.post('/adminarea');

app.post('/city');

app.listen(3000, function () {
  console.log('listening on port 3000!');
});