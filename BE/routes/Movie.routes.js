const express = require("express");
const { createMovie, removeMovie, getAllMovie, addCommentsByUser, getMoviesById, getAllComments, deleteCommentById } = require("../controllers/Movie.controllers");

const movieRouter = express.Router();

movieRouter.post("/add", createMovie);
movieRouter.delete('/remove/:id', removeMovie)
movieRouter.get('/get-movie', getAllMovie)
movieRouter.post('/add-comment', addCommentsByUser)
movieRouter.get('/get-movie/:id', getMoviesById)
movieRouter.get('/get-comments', getAllComments)
movieRouter.delete('/remove-comment/:id', deleteCommentById)

module.exports = movieRouter;