const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const User = require("./models/userModel");
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

app.post("/login", async(req, res) => {
  const email = req.body.email,
    password = req.body.password;
  const user = await User.findOne({ email: email });
  if (!user  || user.password != password) {
    res.send("No user");
  }
  else res.send("User authenticated");
});

app.post("/register", async(req, res) => {
  const { email, username, password } = req.body;
  const user = new User({ email, username, password });
  await user.save();
  res.send("user registered");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
