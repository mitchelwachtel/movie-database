const reviews = require("express").Router();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "movie_db",
});

reviews.get("/", (req, res) => {
  db.query(
    "SELECT m.id movie_id, m.movie_name, r.review, r.id review_id FROM movies m JOIN reviews r ON m.id = r.movie_id",
    function (err, results) {
      if (err) {
        console.error(err);
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = reviews;
