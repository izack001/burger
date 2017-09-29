CREATE DATABASE IF NOT EXISTS burgers_db;
use burgers_db;

CREATE TABLE burgers(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (233) NOT NULL,
	eaten BOOL DEFAULT false,
	PRIMARY KEY (id)
);
	
INSERT INTO burgers (burger_name, eaten) VALUES("Cheese Burger", FALSE);
INSERT INTO burgers (burger_name, eaten) VALUES("Hamburger", FALSE);
INSERT INTO burgers (burger_name, eaten) VALUES("Pizza Burger",FALSE);
