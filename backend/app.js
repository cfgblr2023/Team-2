const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

require("dotenv").config();

const session = require('express-session')
const passport = require('passport')

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

mongoose
  .connect(
    "mongodb+srv://admin:adminpassword@cluster0.bqpjg5r.mongodb.net/cfg",
    {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
      // useFindAndModify: false
    }
  )
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error.message));


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hi");
});

app.post("/login", (req, res) => {
  const emailId = req.body.emailId,
    password = req.body.password;
    login
  res.send("Email is " + emailId + "Password is" + password);
});

app.post("/register", (req, res) => {
  const { email, username, password } = req.body;
  const user = new User({ email, username, password });
  res.send("user registered");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
