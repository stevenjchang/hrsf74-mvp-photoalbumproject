var express = require('express');
var app = express();
var port = 3000;
app.listen(port);

app.get('/', function(req, res) {
  console.log('inside app.get');
  res.status(200).send('app.get successful')
})

app.post('/', function(req, res) {
  console.log('inside app.post');
  res.status(200).send('app.get successful')
})
