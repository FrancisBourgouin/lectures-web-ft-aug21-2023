// import { Pool } from "pg";
const { Pool } = require("pg");

const pool = new Pool({
  user: "francis",
  password: "francis",
  host: "localhost",
  database: "aug_jokes",
  port: 5432,
});

// pool
//   .query("SELECT * FROM jokes")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const executeQuery = (query) => {
  return pool
    .query(query)
    .then((res) => res.rows)
    .catch((err) => console.log(err));
};

const displayJokePretty = (jokeObj) => {
  console.log("🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒");
  console.log(`Q: ${jokeObj.question}`);
  console.log(`A: ${jokeObj.answer}`);
  console.log(`By: ${jokeObj.name}`);
  console.log("🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒🆒");
};

const displayAllTheJokesInAPrettyWay = (jokeList) => {
  for (const joke of jokeList) {
    displayJokePretty(joke);
  }
};

const query = `
SELECT * 
FROM jokes
JOIN authors
ON authors.id = jokes.author_id
;`;

executeQuery(query).then(console.log);
// Async - Await
// Asynchronous content
// - Callbacks
// - Promises

// somePromise()
//   .then()
//   .then()
//   .then()
//   .catch()
//   .finally()

// const asyncCode = async () => {
//   try {
//     const result = await somePromise()
//     const nextResult = result + 1

//   } catch (err){

//   }
// }

// const returnFive = async () => {
//   return 5;
// };

// console.log(5 + returnFive());

// const returnSomething = () => {
//   return new Promise((resolve, reject) => {

//   })
// }
