const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
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
app.get('/', (req, res) => {
  res.send("Hi");
})
app.get('/login', (req, res) => {
    
}
)
app.listen(3000, () => {
  console.log("Server started on port 3000");
});