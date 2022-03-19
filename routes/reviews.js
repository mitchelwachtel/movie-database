const reviews = require("express").Router();
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "movie_db",
  }
);

reviews.get("/", (req, res) => {
  db.query("SELECT * FROM movies", function (err, results) {
    if (err) {
        console.error(err);
      } else {
        res.json(results);
      }
  });
});


module.exports = reviews;
