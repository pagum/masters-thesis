import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import chalk from "chalk";
import jwt from "jsonwebtoken";
import morgan from "morgan";
import mongoose from "mongoose";

const hostname = "localhost";
const port = 4000;

const app = express();
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/Masters_thesis_DB",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("====================================");
    console.log("CONNECTED TO MONGODB!!!");
    console.log("====================================");
  });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(morgan("combined"));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.options("*", cors());

app.post("/auth", async (req, res) => {
  if (req.body) {
    const token = jwt.sign(
      {
        data: req.body.username
      },
      "secret",
      { expiresIn: "3h" }
    );
    res.send(token);
  } else {
    req.flash("error", "Username and password are incorrect");
    res.redirect("/login");
  }
});

//==========================================
app.listen(process.env.PORT || port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
