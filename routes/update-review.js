const updateRev = require("express").Router();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "movie_db",
});

updateRev.put("/", (req, res) => {
  // TODO: update a movie review
  const {review, reviewId} = req.body;

  db.query(
    `UPDATE reviews SET review = '${review}' WHERE id = ${reviewId};`,
    function (err, results) {
      if (err) {
        console.error(err);
      } else {
        console.log("success");
      }
    }
  );
  db.query(`SELECT * FROM reviews`, function (err, results) {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
    }
  });
});

module.exports = updateRev;
