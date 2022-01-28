USE sakila;
INSERT INTO staff (first_name,last_name,address_id, email,store_id,`active`,username,`password`)
VALUES ("Mason","Mount",4,"mason.mount@hotmail.com",2,1,"Mount","abacaxi1");
INSERT INTO staff (first_name,last_name,address_id, email,store_id,`active`,username,`password`)
VALUES ("Mason","Mount",4,"mason.mount@hotmail.com",2,1,"Mount","abacaxi1"),("Christian","Pulisic",3,"chris.pulisic@hotmail.com",2,1,"Chris","password1");
INSERT INTO actor(first_name, last_name)
SELECT first_name, last_name FROM customer LIMIT 5;
INSERT INTO category(`name`) VALUES ("Terror"),("Esportes"), ("Luta");

UPDATE actor
SET first_name = "JULES"
WHERE first_name = "Julia";
UPDATE category
SET `name` = "Science Fiction"
WHERE `name` = "Sci-Fi";
UPDATE film
SET rental_rate = 25.00
WHERE `length` > 100 AND rating IN ("PG", "G", "PG-13") AND replacement_cost > 20.00;

UPDATE film
SET rental_rate = (
CASE 
	WHEN  `length` < 100 THEN 10.00
	ELSE 20.00
    END);


DELETE FROM film_actor WHERE actor_id = 12;
DELETE FROM actor WHERE first_name = "Karl";
DELETE FROM film_actor WHERE actor_id = 8 OR actor_id = 103 OR actor_id = 181;
DELETE FROM actor WHERE first_name = "Matthew";
DELETE FROM film_text WHERE `description` LIKE "%saga%";
TRUNCATE film_category;
TRUNCATE film_actor;