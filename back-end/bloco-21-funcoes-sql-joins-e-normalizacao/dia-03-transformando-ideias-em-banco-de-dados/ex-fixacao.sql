DROP DATABASE IF EXISTS normalization;
CREATE DATABASE normalization;
USE normalization;
CREATE TABLE Setor(
	`setor_id` INT PRIMARY KEY AUTO_INCREMENT,
    `nome` VARCHAR(30)
);
CREATE TABLE Funcionario(
	`funcionario_id` INT PRIMARY KEY AUTO_INCREMENT,
    `nome` VARCHAR(20),
    `sobrenome` VARCHAR(20),
    `email` VARCHAR(50),
    `telefone` VARCHAR(20),
    `data_cadastro` DATETIME
);
CREATE TABLE Funcionario_Setor(
	`funcionario_id` INT,
    `setor_id` INT,
    FOREIGN KEY(`funcionario_id`) REFERENCES Funcionario(`funcionario_id`),
    FOREIGN KEY(`setor_id`) REFERENCES Setor(`setor_id`)
);

INSERT INTO Setor(`nome`) VALUES("Administração"),
("Vendas"),
("Operacional"),
("Estratégico"),
("Marketing");

INSERT INTO Funcionario(`funcionario_id`,`nome`,`sobrenome`,`email`, `telefone`, `data_cadastro`)
VALUES
(12, "Joseph", "Rodrigues", "jo@gmail.com", "(35)998552-1445", "2020-05-05 08:50:25");

INSERT INTO Funcionario(`nome`, `sobrenome`, `email`, `telefone`, `data_cadastro`)
VALUES 
("André", "Freeman", "andre1990@gmail.com", "(47)99522-4996", "2020-02-05"),
("Cíntia", "Duval", "cindy@outlook.com", "(33)99855-4669", "2020-05-05 10:55:35"),
("Fernanda", "Mendes", "fernandamendes@yahoo.com", "(33)99200-1556", "2020-05-05 11:45:40");

INSERT INTO Funcionario_Setor(`funcionario_id`, `setor_id`)
VALUES
(12,1),
(12,2),
(13,3),
(14,4),
(14,2),
(15,5);