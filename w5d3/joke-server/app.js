const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { Pool } = require("pg");

const pool = new Pool({
  user: "francis",
  password: "francis",
  host: "localhost",
  database: "aug_jokes",
  port: 5432,
});
// const { fetchAllJokes, fetchJokeById } = require("./helpers/jokeHelpers");
const generateJokeHelpers = require("./helpers/jokeHelpersv2");
// const { fetchAllJokes, fetchJokeById } = generateJokeHelpers(pool)
const jokes = generateJokeHelpers(pool);

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const templateVars = { title: "Super website of destiny and potatoes" };
  res.render("index", templateVars);
});

app.get("/api/jokes", (req, res) => {
  jokes
    .fetchAll()
    .then((jokes) => res.json(jokes))
    .catch((err) => res.json(err));
});

app.get("/api/jokes/:joke_id", (req, res) => {
  const jokeId = req.params.joke_id;
  jokes
    .fetchById(jokeId)
    .then((joke) => res.json(joke))
    .catch((err) => res.json(err));
});

app.get("/jokes", (req, res) => {
  jokes
    .fetchAll()
    .then((jokes) => {
      const templateVars = { jokes };
      res.render("jokes", templateVars);
    })
    .catch((err) => res.json(err));
});

app.get("/jokes/new", (req, res) => {
  res.render("joke-new");
});

app.get("/jokes/:joke_id", (req, res) => {
  const jokeId = Number(req.params.joke_id);
  jokes
    .fetchById(jokeId)
    .then((joke) => {
      const templateVars = { joke };
      res.render("joke", templateVars);
    })
    .catch((err) => res.json(err));
});

app.post("/jokes", (req, res) => {
  const { question, answer, rating, authorId } = req.body;
  jokes
    .insertOne(question, answer, rating, authorId)
    .then((joke) => res.redirect(`/jokes/${joke.id}`))
    .catch((err) => {
      console.log(err);
      res.redirect("/jokes/new");
    });
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
