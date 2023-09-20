const fetchAllJokes = (pool) => {
  const query = `
    SELECT 
      jokes.*,
      authors.name,
      authors.description,
      authors.funny
    FROM jokes
    LEFT JOIN authors
    ON authors.id = jokes.author_id
  ;`;

  return pool.query(query).then((res) => res.rows);
};

const fetchJokeById = (pool, jokeId) => {
  const query = `
    SELECT 
      jokes.*,
      authors.name,
      authors.description,
      authors.funny
    FROM jokes
    LEFT JOIN authors
    ON authors.id = jokes.author_id
    WHERE jokes.id = $1
  ;`;
  const args = [jokeId];

  return pool.query(query, args).then((res) => res.rows[0]);
};

module.exports = { fetchAllJokes, fetchJokeById };
