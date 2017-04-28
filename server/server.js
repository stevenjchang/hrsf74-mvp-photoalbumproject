var express = require('express');
var app = express();
var port = 3000;

app.route('/')
  .get(function(req, res) {
    res.status(200).send('app.get successful')
  })
  .post(function(req, res) {
    res.status(200).send('app.get successful')
  })

app.listen(port, function(req, res) {
  console.log('connections established on port: ' + port);
});