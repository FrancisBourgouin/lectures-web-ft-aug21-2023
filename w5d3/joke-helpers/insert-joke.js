const { Pool } = require("pg");

const pool = new Pool({
  user: "francis",
  password: "francis",
  host: "localhost",
  database: "aug_jokes",
  port: 5432,
});

const executeQuery = (query, args) => {
  return pool.query(query, args).then((res) => res.rows[0]);
};

const displayJokePretty = (jokeObj) => {
  console.log("🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒");
  console.log(`Q: ${jokeObj.question}`);
  console.log(`A: ${jokeObj.answer}`);
  console.log(`By: ${jokeObj.name}`);
  console.log("🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒");
};

const [, , question, answer, rating, authorId] = process.argv;

const query = `
INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ($1, $2, $3, $4)
RETURNING *
;`;
const args = [question, answer, rating, authorId];

executeQuery(query, args)
  .then(displayJokePretty)
  .catch((err) => console.log(err));
