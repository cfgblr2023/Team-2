const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

require("dotenv").config();

const session = require('express-session')
const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

authUser = (request, accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback",
  passReqToCallback : true
}, authUser));

passport.serializeUser( (user, done) => { 
  console.log(`\n--------> Serialize User:`)
  console.log(user) 
  done(null, user)
})

passport.deserializeUser((user, done) => {
  console.log("\n--------- Deserialized User:")
  console.log(user)
  done (null, user)
}) 

const User = require("./models/userModel");

mongoose
  .connect(
    process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
      // useFindAndModify: false
    }
  )
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error.message));

  //Middleware
app.use(session({
    secret: "secret",
    resave: false ,
    saveUninitialized: true ,
}))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize()) // init passport on every route call
app.use(passport.session())    //allow passport to use "express-session"

app.get("/", (req, res) => {
  res.send("Hi");
});


app.get('/auth/google',
  passport.authenticate('google', { scope:
      ['email', 'profile'] }
));

app.get('/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/',
        failureRedirect: '/login'
}));

app.post("/login", async(req, res) => {
  const email = req.body.email,
  password = req.body.password;
  const user = await User.findOne({ email: email });
  if (!user  || user.password != password) {
    res.send("No user");
  }
  else res.send("User authenticated");
});

app.post('/logout', function(req, res, next) {
  console.log("hello");
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
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
