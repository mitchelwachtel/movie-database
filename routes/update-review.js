const updateRev = require("express").Router();
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "movie_db",
  },
  console.log(`movie_db`)
);

updateRev.post("/", (req, res) => {
  // TODO: update a movie review
//   FIX THIS ... close though
  const {review, movieId} = req.body;

  db.query(
    `INSERT INTO reviews(review, movie_id) VALUES('${review}', '${movieId}');`,
    function (err, results) {
      if (err) {
        console.error(err);
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = updateRev;
