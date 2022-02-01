SELECT mv.`title`, bo.`domestic_sales`, bo.`international_sales` 
FROM Movies mv
INNER JOIN BoxOffice bo
ON mv.`id` = bo.`movie_id`;

SELECT mv.`title`, bo.`domestic_sales`, bo.`international_sales` 
FROM Movies mv
INNER JOIN BoxOffice bo
ON mv.`id` = bo.`movie_id` AND bo.`international_sales` > bo.`domestic_sales`;

SELECT mv.`title`, bo.`rating`
FROM Movies mv
INNER JOIN BoxOffice bo
ON mv.`id` = bo.`movie_id`
ORDER BY bo.`rating` DESC;

SELECT th.`id`, th.`name`, th.`location`, mv.`id`, mv.`title`, mv.`director`, mv.`year`, mv.`length_minutes`
FROM Theater th
LEFT JOIN Movies mv
ON th.`id` = mv.`theater_id`
ORDER BY th.`name`;

SELECT th.`id`, th.`name`, th.`location`, mv.`id`, mv.`title`, mv.`director`, mv.`year`, mv.`length_minutes`
FROM Theater th
RIGHT JOIN Movies mv
ON th.`id` = mv.`theater_id`
ORDER BY th.`name`;
