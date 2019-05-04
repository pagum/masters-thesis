const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const chalk = require("chalk");
var stringify = require("json-stringify-safe");

const hostname = "localhost";
const port = 4000;

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());
app.use(bodyParser());
app.options("*", cors());

app.post("/auth", async (req, res) => {
  if (true) {
    res.send(stringify(req, null, 1));
  } else {
    req.flash("error", "Username and passwordx are incorrect");
    res.redirect("/login");
  }
});

//==========================================
app.listen(process.env.PORT || port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
