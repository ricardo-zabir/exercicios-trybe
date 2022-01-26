SELECT "Ricardo";
SELECT "Ricardo", "Zabir", "Porto Alegre", 20;
SELECT "Ricardo" as `Nome`, "Zabir" as `Sobrenome`, "Porto Alegre" as `Cidade Natal`, 20 as `Idade`;
SELECT 13 * 8;
SELECT now() as `Data Atual`;

USE sakila;
SELECT * FROM city;
SELECT first_name, last_name FROM customer;
SELECT * FROM rental;
SELECT title, `description`, release_year FROM film; 

SELECT CONCAT(first_name," ",last_name) AS `name` FROM actor;
SELECT CONCAT(title," -> ", release_year) AS `Lançamento do Filme` FROM film;
SELECT CONCAT(title," -> ",rating) AS `Classificação` FROM film;
SELECT CONCAT(address,", ",district) as `Endereço` FROM address;

SELECT * FROM Escola.Alunos;
SELECT DISTINCT nome,idade FROM Escola.Alunos;
SELECT DISTINCT nome FROM Escola.Alunos;
SELECT DISTINCT idade FROM Escola.Alunos;

SELECT count(password) FROM staff;
SELECT count(*) FROM staff;
SELECT count(email) FROM staff;

SELECT title, `release_year`, rating FROM film;
SELECT count(title) FROM film;

SELECT DISTINCT last_name FROM actor;
SELECT count(DISTINCT last_name) FROM actor;
SELECT * FROM actor ORDER BY last_name, first_name DESC;

SELECT * FROM language LIMIT 5 OFFSET 1;

SELECT * FROM film;
SELECT title, release_year, `length`, rating, replacement_cost FROM film ORDER BY length DESC, replacement_cost LIMIT 20;