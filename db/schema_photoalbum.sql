DROP DATABASE IF EXISTS photo_album;

CREATE DATABASE photo_album;

USE photo_album;

CREATE TABLE pets (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(25),
  photoUrl varchar(100),
  PRIMARY KEY (id)
)