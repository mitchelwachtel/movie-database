const express = require("express");
const moviesRouter = require("./movies");
const addMovieRouter = require("./add-movie");
const updateRevRouter = require("./update-review");
const reviewsRouter = require("./reviews");

const app = express();

app.use("/movies", moviesRouter);
app.use("/add-movie", addMovieRouter);
app.use("/update-review", updateRevRouter);
app.use("/reviews", reviewsRouter);

module.exports = app;
