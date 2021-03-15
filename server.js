//packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//port
const PORT = process.env.PORT || 3000;

// const db = require("./seeders");

const app = express();
//to use
app.use(logger("dev"));
//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//static files
app.use(express.static("public"));
//mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", {
  useNewUrlParser: true,
});

// app.use(require("./seeders"));

//listening to routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

//listening to port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
