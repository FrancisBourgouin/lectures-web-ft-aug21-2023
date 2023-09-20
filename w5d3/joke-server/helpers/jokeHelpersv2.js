// Higher Order Function => A function that takes in a function as a parameter
// AND/OR
// Higher Order Function => A function that returns a function definition

// const add = (a, b) => {
//   a + b;
// };

const generateJokeHelpers = (pool) => {
  const fetchAll = () => {
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

  const fetchById = (jokeId) => {
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

  const insertOne = (question, answer, rating, authorId) => {
    const query = `
    INSERT INTO
      jokes (question, answer, rating, author_id)
    VALUES
      ($1, $2, $3, $4)
    RETURNING *
    ;`;
    const args = [question, answer, rating, authorId];

    return pool.query(query, args).then((res) => res.rows[0]);
  };

  return { fetchAll, fetchById, insertOne };
};

module.exports = generateJokeHelpers;
