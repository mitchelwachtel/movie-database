const express = require("express");
const path = require("path");
const api = require("./routes/index.js");
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const app = express();

// MIDDLEWEAR
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'rootroot',
      database: 'movie_db'
    },
    console.log(`movie_db`)
  );

// '/api' is sent to the index.js in the routes folder 
app.use("/api", api);

app.use(express.static("public"));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
