USE Scientists;
SELECT * FROM Scientists WHERE `name` LIKE "%e%";
SELECT `name` FROM Projects WHERE `code` LIKE "A%" ORDER BY `name`;
SELECT `name`, `code` FROM Projects WHERE `code` LIKE "%3%" ORDER BY `name`;
SELECT Scientist FROM AssignedTo WHERE Project IN ("AeH3", "Ast3", "Che1");
SELECT * FROM Projects WHERE Hours > 500;
SELECT * FROM Projects WHERE Hours BETWEEN 251 AND 799;
SELECT `Name`, `Code` FROM Projects WHERE `Name` NOT LIKE "A%";
SELECT `Name` FROM Projects WHERE `Code` LIKE "%H%";