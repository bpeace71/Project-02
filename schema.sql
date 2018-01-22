DROP DATABASE tortoise_db;

CREATE DATABASE tortoise_DB;

USE tortoise_DB;

CREATE TABLE grannysmith1234(
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  userpass VARCHAR(45) NOT NULL,
  user_age INT NOT NULL,
  starting_height_imp INT default 0,
  starting_height_met INT default 0,
  starting_weight_imp INT default 0,
  starting_weight_met INT default 0,
  starting_BMI INT default 0,
  week_1_weight_imp INT default 0,
  week_1_weight_met INT default 0,
  PRIMARY KEY (id)
);