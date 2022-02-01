USE sakila;
SELECT act.`actor_id`, act.`first_name`, film_act.`film_id` 
FROM actor act
INNER JOIN film_actor film_act
ON film_act.`actor_id`= act.`actor_id`;
SELECT stf.`first_name`, stf.`last_name`, adr.`address`
FROM staff stf
INNER JOIN address adr
ON adr.`address_id` = stf.`address_id`;
SELECT cstm.`customer_id`, CONCAT(cstm.`first_name`," ", cstm.`last_name`) AS `name`,
cstm.`email`, cstm.`address_id`, adr.`address`
FROM customer cstm
INNER JOIN address adr
ON adr.`address_id` = cstm.`address_id`
ORDER BY `name` DESC
LIMIT 100;
SELECT CONCAT(cstm.`first_name`," ", cstm.`last_name`) AS `name`, 
cstm.`email`, cstm.`address_id`, adr.`address`, adr.`district`
FROM customer cstm
INNER JOIN address adr
ON adr.`address_id` = cstm.`address_id`
WHERE `district` = 'California' AND cstm.`first_name` LIKE "%rene%";
SELECT cstm.`first_name`, COUNT(adr.address) `number_of_address` FROM
customer cstm
INNER JOIN address adr
ON adr.`address_id` = cstm.`address_id`
WHERE cstm.`active` = 1
GROUP BY cstm.`customer_id`
ORDER BY cstm.`first_name` DESC;
SELECT stf.`first_name`, stf.`last_name`, AVG(pmnt.`amount`) AS `amount_avg`
FROM staff stf
INNER JOIN payment pmnt
ON pmnt.`staff_id` = stf.`staff_id`
WHERE pmnt.`payment_date` LIKE ("2006%")
GROUP BY stf.`first_name`, stf.`last_name`;
SELECT act.`actor_id`, act.`first_name`, film_act.`film_id`, flm.`title`
FROM actor act
INNER JOIN film_actor film_act
ON film_act.`actor_id` = act.`actor_id`
INNER JOIN film flm
ON film_act.`film_id` = flm.`film_id`;

SELECT * FROM hr.employees;
SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
    hr.employees AS Employee
INNER JOIN
    hr.employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
WHERE 
	Employee.`DEPARTMENT_ID` <> Manager.`DEPARTMENT_ID`;
    
SELECT
	COUNT(Employee.FIRST_NAME),
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
    hr.employees AS Employee
INNER JOIN
    hr.employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
GROUP BY `Nome Gerente`;