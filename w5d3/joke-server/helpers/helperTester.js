const { Pool } = require("pg");

const pool = new Pool({
  user: "francis",
  password: "francis",
  host: "localhost",
  database: "aug_jokes",
  port: 5432,
});

const generateJokeHelpers = require("./jokeHelpersv2");

const jokes = generateJokeHelpers(pool);

// jokes.fetchAll().then(console.log);

jokes.fetchById(5).then(console.log);
