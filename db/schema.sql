DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR NOT NULL,
devoured BOOLEAN
);

