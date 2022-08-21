DROP DATABASE IF EXISTS `fitnessapp_db`;

CREATE SCHEMA `fitnessapp_db`;

use `fitnessapp_db`;

CREATE TABLE `fitnessapp_db`.`user_details` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email_id` VARCHAR(45) NOT NULL,
  `phone_no` VARCHAR(45) NOT NULL,
  `user_name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `user_name_UNIQUE` (`user_name` ASC) VISIBLE);