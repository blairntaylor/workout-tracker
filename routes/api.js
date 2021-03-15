const db = require("../models");

module.exports = (app) => {
  //app.get for find
  app.get("/api/workout", (req, res) => {
    db.Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });
  //app.post to make new workout
  app.post("/api/workout", (req, res) => {
    db.Workout.create({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });
  //app.put find workout range
  app.get("/api/workout/range", (req, res) => {
    db.Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });

  //app.post create new workout plan
  app.post("/api/workout/range", (req, res) => {
    db.Workout.create({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });

  //app to add exercise to workout by id
  app.put("/api/workout/:workout", ({ params, body }, res) => {
    db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true },
      (updatedWorkout) => {
        res.json(updatedWorkout);
      }
    );
  });
};
