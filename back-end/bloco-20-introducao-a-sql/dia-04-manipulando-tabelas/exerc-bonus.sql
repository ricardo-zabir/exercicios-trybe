UPDATE BoxOffice SET rating = 9.0 WHERE domestic_sales > 400000000;

UPDATE BoxOffice SET rating = 6.0 WHERE domestic_sales > 200000000 AND international_sales < 300000000;

DELETE FROM BoxOffice WHERE movie_id IN (1, 6, 7, 8);
DELETE FROM Movies WHERE id IN (1, 6, 7, 8);