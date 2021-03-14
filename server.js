//packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//port
const PORT = process.env.PORT || 3000;

const db = require("./seeders");

const app = express();
//to use
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", {
  useNewUrlParser: true,
});

//listening to routes?

// view daily workouts

// log new exercises

// view all weight from past 7 exercises

// view total duration of each workout for the past 7

//listening to port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
