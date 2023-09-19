-- Basic SELECT

SELECT * FROM jokes;

SELECT * FROM authors;


-- Single WHERE clause

SELECT * FROM jokes WHERE rating = 5;

SELECT id AS joke_id, question, answer FROM jokes WHERE rating = 5;

-- Multiple WHERE clauses

SELECT * FROM jokes WHERE rating > 3 AND question LIKE '%W%';


SELECT * FROM jokes WHERE rating > 3 AND LOWER(question) LIKE '%w%';

SELECT * FROM jokes WHERE rating > 3 AND question ILIKE '%w%';


SELECT * 
FROM jokes 
  WHERE rating > 3 
  OR LOWER(question) LIKE '%w%'
;


-- Ordering results

SELECT * 
FROM jokes 
WHERE 
  rating > 3 
  OR LOWER(question) LIKE '%w%'
ORDER BY rating DESC
;

SELECT * 
FROM jokes 
WHERE 
  rating > 3 
  OR LOWER(question) LIKE '%w%'
ORDER BY rating DESC
LIMIT 1
;

-- Joining tables

SELECT *
FROM jokes
JOIN authors
  ON author_id = authors.id
;

-- SELECT 
--   jokes.question,
--   jokes.answer,
--   jokes.rating,
--   authors.name
-- FROM jokes
-- JOIN authors
--   ON author_id = authors.id
-- ;

SELECT 
  jokes.*,
  authors.name
FROM jokes 
LEFT JOIN authors
  ON author_id = authors.id
;


-- Aggregate functions (AVG, MIN, MAX, SUM, COUNT) (HAVING GROUPBY)

SELECT 
  author_id, 
  COUNT(*) AS amount_of_jokes 
FROM jokes 
GROUP BY author_id;

SELECT
  author_id,
  AVG(rating) as avg_joke_rating
FROM jokes
GROUP BY author_id;

-- SHOW the jokes of authors having an average of 4 and more in their jokes

SELECT * 
FROM jokes
GROUP BY jokes.id
HAVING AVG(rating) >= 4;


SELECT *
FROM jokes
WHERE rating >= 4;


SELECT
  author_id
FROM jokes
GROUP BY author_id
HAVING AVG(rating) >= 4;

-- SELECT * FROM jokes WHERE author_id = 11
-- SELECT * FROM jokes WHERE author_id = 9
-- SELECT * FROM jokes WHERE author_id = 3

SELECT * FROM jokes WHERE author_id IN (11,9,3,4,6,2,7,12,1);

-- Nested selects

SELECT * 
FROM jokes 
WHERE author_id 
IN (
  SELECT author_id
  FROM jokes
  GROUP BY author_id
  HAVING AVG(rating) >= 4
);

-- Views (stretch)

CREATE VIEW cool_authors_jokes AS SELECT * 
FROM jokes 
WHERE author_id 
IN (
  SELECT author_id
  FROM jokes
  GROUP BY author_id
  HAVING AVG(rating) >= 4
);

CREATE VIEW jokes_with_authors_name AS SELECT 
  jokes.*,
  authors.name
FROM jokes 
LEFT JOIN authors
  ON author_id = authors.id
;