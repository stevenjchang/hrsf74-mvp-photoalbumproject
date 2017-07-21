var express = require('express');
var app = express();
var port = 3000;
var db = require('../db/db.js');
var path = require('path');
var bodyParser = require('body-parser');

var mysql = require('mysql');
var mysqlConfig = require('../db/config.js');
var connection = mysql.createConnection(mysqlConfig);

app.use('/dist', express.static(path.resolve(__dirname, '../client/dist/')));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  db.selectAllPhotos2(function(err, result){
    if (err) { 
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

app.post('/postpets', function(req, res) {
  console.log('req.body', req.body);
  db.insertPhoto(req.body, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})


app.route('/')
  .post(function(req, res) {
    db.insertPhoto(function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  })
app.route('/photos')
  .get(function(req, res) {
    // res.sendFile(path.join(__dirname + './../public/index.html'));
    res.sendFile(path.join(__dirname + './../client/index.html'));
    // res.send('done');
  })

app.listen(port, function(req, res) {
  console.log('connections established on port: ' + port);
});

