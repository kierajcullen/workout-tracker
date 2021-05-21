const workout = require("../models/workout-tracker");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    workout
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", function (req, res) {
    workout
      .create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", function (req, res) {
    workout
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/range", function (req, res) {
    workout
      .create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    // get id out of parameters
    // store req.param.id
    // use object destructuring
    let id = params.id;
  });
};
