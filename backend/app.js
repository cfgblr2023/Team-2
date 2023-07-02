const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require('passport');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');
const fs = require('fs').promises;
const path = require('path');
const process = require('process');

const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

const Course = require('./models/course');
const Mentee = require("./models/mentee");
const Mentor = require("./models/mentor");
const Assignment = require('./models/assignment');
require("dotenv").config();

mongoose
  .connect(
    process.env.MONGODB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error.message));

app.use(session({
    secret: "secret",
    resave: false ,
    saveUninitialized: true ,
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize()) 
app.use(passport.session())

async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

async function listEvents(auth) {
  const calendar = google.calendar({version: 'v3', auth});
  const res = await calendar.events.list({
    calendarId: 'primary',
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  });
  const events = res.data.items;
  if (!events || events.length === 0) {
    console.log('No upcoming sessions found.');
    return;
  }
  var result = [];
  for(var i in events){
    if(i.summary.substr(0,6) == "CANASU"){
      result.push(i);
    }
  }
  if(!result || result.length === 0){
    console.log('No upcoming sessions found.');
    return;
  }
  console.log('Upcoming next sessions:');
  result.map((event, i) => {
    const start = event.start.dateTime || event.start.date;
    console.log(`${start} - ${event.summary}`);
  });
}

async function createEvents(auth, name, st_time, end_time, req_id) {
  const calendar = google.calendar({version: 'v3', auth});
  const event = {
    'summary': name,
    'description': 'Upcoming Mentoring Session.',
    'start': {
      'dateTime': st_time,
      'timeZone': 'Asia/Kolkata',
    },
    'end': {
      'dateTime': end_time,
      'timeZone': 'Asia/Kolkata',
    },
    'recurrence': [
      'RRULE:FREQ=DAILY;COUNT=2'
    ],
    'reminders': {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10},
      ],
    },
  };

  const eventPatch = {
    conferenceData: {
      createRequest: {requestId: req_id}
    }
  };
  
  gapi.client.calendar.events.patch({
    calendarId: "primary",
    eventId: "7cbh8rpc10lrc0ckih9tafss99",
    resource: eventPatch,
    sendNotifications: true,
    conferenceDataVersion: 1
  }).execute(function(event) {
    var meetlink = event.htmlLink;
  });  
  
  calendar.events.insert({
    auth: auth,
    calendarId: 'primary',
    resource: event,
  }, function(err, event) {
    if (err) {
      console.log('There was an error contacting the Calendar service: ' + err);
      return;
    }
    return event.htmlLink;
  });  
}

app.get("/", (req, res) => {
  res.send("Hi");
});
<<<<<<< HEAD
app.get('/assignment',async(req, res)=>{
  // console.log("Hi");
  const a = "abs", b = "ccc";
  // const assignmentq =  new Assignment({Mentor_email:a,Mentee_email:b});
  // await assignmentq.save();
  const assignments = await Assignment.find({});
  res.send(assignments);
});
app.get('/auth/google',
  passport.authenticate('google', { scope:
      ['email', 'profile'] }
));
=======

app.get("/events/list", (req, res) => {
  authorize().then(listEvents);
});
>>>>>>> b50190ef482a16cffef0a5b0c41e22eef6624187

app.get("/events/create", (req, res) => {
  authorize().then(createEvents);
});

app.post("/loginmentee", async(req, res) => {
  const email = req.body.email,
  password = req.body.password;
  const user = await Mentee.findOne({ email: email });
  if (!user  || user.password != password) {
    res.send("No mentee");
  }
  else res.send("Mentee authenticated");
});

app.post("/loginmentor", async(req, res) => {
  const email = req.body.email,
  password = req.body.password;
  const user = await Mentor.findOne({ email: email });
  if (!user  || user.password != password) {
    res.send("No mentor");
  }
  else res.send("Mentor authenticated");
});
app.get('/getmentors',async(req,res)=>{
  const mentors = await Mentor.find({});
  res.send(mentors);
})
app.get('/getmentee/:id', async(req, res)=>{
  const id = req.params.id;
  const mentee = await Mentee.findOne({_id:id});
  res.send(mentee);
})
app.get('/getmentee', async(req, res)=>{
  const mentee =await Mentee.find({});
  res.send(mentee);
})

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

app.post("/mentor", async(req, res) => {
  const {email,fullname,password,phone,city,curr_add,gender,dob,age,occupation,organization,experience,
    languages,days_available,time_slots,mapping,volunteered,role,
    interest,skills,teaching,worked_before,call,availability} = req.body;
  const user_mentor = new Mentor({ email,fullname,password,phone,city,curr_add,gender,dob,age,occupation,organization,experience,
    languages,days_available,time_slots,mapping,volunteered,role,
    interest,skills,teaching,worked_before,call,availability});
  await user_mentor.save();
  res.send("Mentor registered");
});

app.post("/mentee", async(req, res) => {
  const {email,fullname,password,phone,gender,dob,age,languages,curr_add,permanent_add,edu_status,
    institution,program,question_fiveyears,question_participation,support,hours,days_available,
    time_slots,attend_allsessions } = req.body;
  const user_mentee = new Mentee({ email,fullname,password,phone,gender,dob,age,languages,curr_add,permanent_add,edu_status,
    institution,program,question_fiveyears,question_participation,support,hours,days_available,
    time_slots,attend_allsessions });
  await user_mentee.save();
  res.send("Mentee registered");
});

<<<<<<< HEAD

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
app.get('*',(req, res)=>{
  res.send('Page not found');
})
=======
>>>>>>> b50190ef482a16cffef0a5b0c41e22eef6624187
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
