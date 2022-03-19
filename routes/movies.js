const movies = require("express").Router();
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'rootroot',
      database: 'movie_db'
    },
    console.log(`movie_db`)
  );

movies.get("/", (req, res) => {
// TODO: renders a list of movies
});

movies.delete("/:id", (req, res) => {
const id = req.params.id;
// TODO: deletes a 'route' when tested w/ insomnia

});

module.exports = movies;

