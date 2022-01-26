USE sakila;
SELECT * FROM customer WHERE email = "LEONARD.SCHOFIELD@sakilacustomer.org";
SELECT * FROM customer WHERE store_id = 2 AND first_name <> "Kenneth" AND active is false ORDER BY first_name,last_name;
SELECT title, `description`, release_year, replacement_cost FROM film WHERE rating IN ("PG","PG-13","G") AND replacement_cost >= 18.00 ORDER BY replacement_cost DESC, title LIMIT 100;
SELECT count(*) FROM customer WHERE active IS true AND store_id = 1;
SELECT * FROM customer WHERE active IS false AND store_id = 1;
SELECT * FROM film WHERE rating NOT IN("PG","PG-13","G") ORDER BY rental_rate, title LIMIT 50;

SELECT * FROM film WHERE title LIKE "%ace%";
SELECT * FROM film WHERE description LIKE "%china";
SELECT * FROM film WHERE description LIKE "%girl%" AND title LIKE "%lord";
SELECT * FROM film WHERE title LIKE "___gon%";
SELECT * FROM film WHERE title LIKE "___gon%" AND description LIKE "%Documentary%";
SELECT * FROM film WHERE title LIKE "%academy" OR title LIKE "mosquito%";
SELECT * FROM film WHERE description LIKE "%monkey%" AND description LIKE "%sumo%";

SELECT * FROM payment WHERE customer_id IN (269,239,126,399,142);
SELECT * FROM address WHERE district IN ("QLD","Nagasaki","California","Attika","Mandalay","Nantou","Texas");

SELECT first_name, last_name, email FROM customer WHERE last_name IN ("Hicks", "Crawford", "Henry", "Boyd", "Mason", "Morales", "Kennedy") ORDER BY first_name, last_name; 
SELECT email FROM customer WHERE address_id BETWEEN 172 AND 176 ORDER BY email;
SELECT count(*) FROM payment WHERE payment_date BETWEEN "2005-05-01" AND "2005-08-01";
SELECT title, release_year, rental_duration FROM film WHERE rental_duration BETWEEN  3 AND 6 ORDER BY rental_duration DESC, title;
SELECT title, rating FROM film WHERE rating IN ("PG","PG-13","G") ORDER BY title LIMIT 500;

SELECT count(*) FROM payment WHERE payment_date LIKE "2005-05-25%";
SELECT count(*) FROM payment WHERE payment_date BETWEEN "2005-07-01" AND "2005-08-22";
SELECT DATE(rental_date) as `data`, DAY(rental_date) as `dia`, MONTH(rental_date) as `mês`, YEAR(rental_date) as `ano`, HOUR(rental_date) as `hora`, MINUTE(rental_date) as `minuto` FROM rental WHERE rental_id = 10330;
SELECT count(*) FROM payment WHERE payment_date BETWEEN "2005-07-28 22:00" AND "2005-07-28 23:59";