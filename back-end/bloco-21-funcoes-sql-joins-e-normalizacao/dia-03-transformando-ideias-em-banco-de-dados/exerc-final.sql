DROP DATABASE IF EXISTS Zoo;
CREATE DATABASE Zoo;
USE Zoo;

CREATE TABLE Animals(
	`ID` INT PRIMARY KEY AUTO_INCREMENT,
    `Nome` VARCHAR(50),
    `Espécie` VARCHAR(50),
    `Sexo` VARCHAR(1),
    `Idade` TINYINT,
    `Localização` VARCHAR(70)
);
CREATE TABLE Gerentes(
	`gerente_id` INT PRIMARY KEY AUTO_INCREMENT,
    `nome_gerente` VARCHAR(50)
);
CREATE TABLE Cuidadores(
	`cuidador_id` INT PRIMARY KEY AUTO_INCREMENT,
    `nome_cuidador` VARCHAR(50),
    `gerente_id` INT,
    FOREIGN KEY(`gerente_id`) REFERENCES Gerentes(`gerente_id`)
);
CREATE TABLE Animals_Cuidadores(
	`animal_id` INT,
    `cuidador_id` INT,
    FOREIGN KEY(`animal_id`) REFERENCES Animals(`ID`),
    FOREIGN KEY(`cuidador_id`) REFERENCES Cuidadores(`cuidador_id`)
);