const movies = require("express").Router();

movies.get("/", (req, res) => {
// TODO: renders a list of movies
});

movies.delete("/:id", (req, res) => {
const id = req.params.id;
// TODO: deletes a 'route' when tested w/ insomnia

});

module.exports = movies;

