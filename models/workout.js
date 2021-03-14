//takes in connection and datatypes
const mongoose = require("mongoose");

const Schema = mongoose.schema;

//create schema
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  type: {
    type: String,
    trim: true,
    required: "Enter exercise type",
  },
  cardioname: {
    type: String,
    trim: true,
    required: "Enter cardio name",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter exercise name",
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  resistanceduration: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);
//export module
module.exports = Workout;
