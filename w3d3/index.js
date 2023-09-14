const express = require("express");
const cookieParser = require("cookie-parser");
const { authenticateThief, findThiefById, createThief } = require("./helpers");
const { thieves } = require("./data");

const app = express();
const port = 3000;

app.use(cookieParser()); // Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); // Take a form string and convert it to an object
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const thiefId = req.cookies.thiefId;
  const thief = findThiefById(thieves, thiefId);
  let templateVars = { name: "", imagePath: "" };

  if (thief) {
    templateVars = { ...thief };
  }

  return res.render("index", templateVars);
});

app.post("/login", (req, res) => {
  // req.body, req.params
  const { email, password } = req.body;
  // email, password from the form
  const { error, thief } = authenticateThief(thieves, email, password);

  if (error) {
    return res.send(error);
  }
  res.cookie("thiefId", thief.id);
  return res.redirect("/");
});

app.post("/logout", (req, res) => {
  res.clearCookie("thiefId");

  return res.redirect("/");
});

app.get("/register", (req, res) => {
  return res.render("register");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const thief = createThief(thieves, email, password, name);
  console.log(thieves);

  res.cookie("thiefId", thief.id);
  return res.redirect("/");
});

app.listen(port, () => console.log(`Express server running on port ${port}`)); // Start listening to requests on port specified by the port variable
