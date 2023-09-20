// import { Pool } from "pg";
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

const jokeId = process.argv[2];

const query = `
SELECT * 
FROM jokes
LEFT JOIN authors
ON authors.id = jokes.author_id
WHERE jokes.id = $1
;`;
const args = [jokeId];

executeQuery(query, args)
  .then(displayJokePretty)
  .catch((err) => console.log(err));
