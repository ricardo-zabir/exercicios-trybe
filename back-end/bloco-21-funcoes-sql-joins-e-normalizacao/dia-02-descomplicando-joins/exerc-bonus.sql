SELECT mv.`id`, mv.`title`, mv.`director`, mv.`year`, mv.`length_minutes`, bo.`rating`, bo.`domestic_sales`, bo.`international_sales`FROM
Movies mv
INNER JOIN BoxOffice bo
ON bo.`movie_id` = mv.`id` AND rating > 8.0;