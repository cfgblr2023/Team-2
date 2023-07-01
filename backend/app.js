const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Course = require('./models/course');
const User = require("./models/userModel");
const Mentee = require("./models/mentee");
const Mentor = require("./models/mentor");
require("dotenv").config();

const session = require('express-session')
const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const User = require("./models/userModel");

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

passport.serializeUser( async (user, done) => { 
  console.log(`\n--------> Serialize User:`)
  user.position = "Mentor"
  const GoogleUser = new User({username: user.given_name, email: user.email, password: user.id});
  await GoogleUser.save()
  done(null, user)
})

passport.deserializeUser((user, done) => {
  console.log("\n--------- Deserialized User:")
  console.log(user)
  done (null, user)
}) 

mongoose
  .connect(
    process.env.MONGODB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
app.post("/loginmentee", async(req, res) => {
  const email = req.body.email,
  password = req.body.password;
  const user = await Mentee.findOne({ email: email });
  if (!user  || user.password != password) {
    res.send("No user");
  }
  else res.send("User authenticated");
});
app.post("/loginmentor", async(req, res) => {
  const email = req.body.email,
  password = req.body.password;
  const user = await Mentor.findOne({ email: email });
  if (!user  || user.password != password) {
    res.send("No user");
  }
  else res.send("User authenticated");
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
app.get('/allcourses', async (req, res) => {
  const courses = await Course.find({});
  
  res.send(courses);
})
app.post('/addcourse', async (req, res) => {
  const name = req.body.name, image = req.body.image, description = req.body.description, likes = req.body.likes, review = req.body.review;
  
  const course = await new Course({ name, image, description, likes, review });
  await course.save();
  res.send('Course added');
})
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
app.post("/mentee", async(req, res) => {
  const {email,fullname,phone,gender,dob,age,languages,curr_add,permanent_add,edu_status,
    institution,program,question_fiveyears,question_participation,support,hours,days_available,
    time_slots,attend_allsessions } = req.body;
  const user_mentee = new Mentee({ email,fullname,phone,gender,dob,age,languages,curr_add,permanent_add,edu_status,
    institution,program,question_fiveyears,question_participation,support,hours,days_available,
    time_slots,attend_allsessions });
  await user_mentee.save();
  res.send("Mentee registered");
});


app.post("/mentor", async(req, res) => {
  const {email,fullname,phone,city,curr_add,gender,dob,age,occupation,organization,experience,
    languages,days_available,time_slots,permanent_add,edu_status,institution,program,
    question_fiveyears,question_participation,support,hours,mapping,volunteered,role,
    interest,skills,teaching,worked_before,call,availability} = req.body;
  const user_mentor = new Mentor({ email,fullname,phone,city,curr_add,gender,dob,age,occupation,organization,experience,
    languages,days_available,time_slots,permanent_add,edu_status,institution,program,
    question_fiveyears,question_participation,support,hours,mapping,volunteered,role,
    interest,skills,teaching,worked_before,call,availability });
  await user_mentor.save();
  res.send("Mentor registered");
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
