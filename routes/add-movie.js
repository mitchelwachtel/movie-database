const addMovie = require("express").Router();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "movie_db",
});

addMovie.post("/", (req, res) => {
  //   TODO: adds a movie when tested using Insomnia
//   const {movieName} = req.body;

  db.query(
    `INSERT INTO movies(movie_name) VALUES('${req.body.movie_name}');`,
    function (err, results) {
      if (err) {
        console.error(err);
      } else {
        console.log("success");
      }
    }
  );
  db.query(`SELECT * FROM movies`, function (err, results) {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
    }
  });
});

module.exports = addMovie;
