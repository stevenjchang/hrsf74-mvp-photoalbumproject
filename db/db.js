var mysql = require('mysql');
var mysqlConfig = require('./config.js');
var connection = mysql.createConnection(mysqlConfig);

// var selectAllPhotos = function(req, res) {
//   connection.query('SELECT * FROM kanyes', function(err, result) {
//     res.send(result);
//   })
// }

var selectAllPhotos2 = function(callback) {
  connection.query('SELECT * FROM pets', function(err, result) {
    if (err) { callback(err, null) }
    else {
      callback(null, result)
    }
  });
}

var postPets = function(callback) {
  connection.query('SELECT * FROM kanyes where id = ?', 1, function(err, results) {
    if (err) { callback(err, null) }
    else {
      callback(null, results);
    }
  })
}

var insertPhoto = function(input, callback) {  
  connection.query('INSERT INTO pets (name, photoUrl) VALUES (?, ?)', [input.name, input.photoUrl], function(err, results) {
    if (err) { callback(err, null) } 
    else {
      console.log('insertPhoto results from db.js', results);
      
      callback(null, results);
    }
  } )
}

module.exports.selectAllPhotos2 = selectAllPhotos2;
module.exports.postPets = postPets;
module.exports.insertPhoto = insertPhoto;

