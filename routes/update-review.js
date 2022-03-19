const updateRev = require("express").Router();
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

  updateRev.post("/", (req, res) => {
// TODO: update a movie review
  });

  module.exports = updateRev;