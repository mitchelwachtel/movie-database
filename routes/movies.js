const movies = require("express").Router();
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "movie_db",
  }
);

movies.get("/", (req, res) => {
  db.query("SELECT * FROM movies", function (err, results) {
    if (err) {
        console.error(err);
      } else {
        res.json(results);
      }
  });
});

movies.delete("/:id", (req, res) => {
  const id = req.params.id;
  // TODO: deletes a 'route' when tested w/ insomnia
  db.query(`DELETE FROM movies WHERE id = ?`, id, function (err, results) {
    if (err) {
      console.error(err);
    } else {
      console.log('success');
    }
  });
  db.query(`SELECT * FROM movies`, function (err, results) {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
    }
  });
});

module.exports = movies;
