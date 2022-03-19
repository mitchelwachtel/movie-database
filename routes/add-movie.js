const addMovie = require("express").Router();
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

  addMovie.post("/", (req, res) => {
    //   TODO: adds a movie when tested using Insomnia
  });

  module.exports = addMovie;