const { default: mongoose } = require("mongoose");
const Comments = require("../models/Comments");
const Movies = require("../models/Movies");
const User = require("../models/User");
const {
  errorResponse,
  successResponse,
} = require("../utils/common");

const createMovie = async (req, res) => {
  try {
    const { movieName, description, image_url } = req.body;
    let movie
    movie = new Movies({
        movieName: movieName,
        description: description,
        image_url: image_url
    });
    await movie.save();
    return successResponse(res, { data: "Movie Successfully added" });
  } catch (error) {
    console.log(error);
    return errorResponse(res, { data: "Internal server error" });
  }
};

const removeMovie = async (req, res) => {
    try {
        const movie_id = req.params.id;
        const movie = await Movies.findOneAndUpdate(
          {_id: movie_id },
          {$set: {
            isDeletedMovie: true
          }},
          { returnOriginal: false }
        )
        return successResponse(res, { data: "Movie Successfully removed" });
      } catch (error) {
        console.log(error);
        return errorResponse(res, { data: "Internal server error" });
      }
} 

const getAllMovie = async (req, res) => {
  try {
    const movieArr = await Movie.aggregate([
      {
        $match: {
          isDeletedMovie: false,
        },
      },
      {
        $group: {
          _id: '$_id',
          movieName: { $first: '$movieName' },
          description: { $first: '$description' },
          image_url: { $first: '$image_url' },
        },
      },
    ]);
    return successResponse(res, { data: movieArr });
  } catch (error) {
    console.log(error);
    return errorResponse(res, { data: "Internal server error" });
  }
}

const addCommentsByUser = async (req, res) => {
  try {
    const { comment, commentedBy, movie_id } = req.body;

    let comments = new Comments({
      commentedBy: commentedBy,
      comment: comment,
      movie_id
    })
    await comments.save()

    return successResponse(res, { data: "Comment added successfully" }, 200);
  } catch (error) {
    console.log(error);
    return errorResponse(res, { data: "Internal server error" }, 500);
  }
}


const getMoviesById = async (req, res) => {
  try {
    const movie_id = req.params.id;

    const movies = await Movie.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(movie_id),
          isDeletedMovie: false,
        },
      },
      {
        $lookup: {
          from: 'comments',
          localField: '_id',
          foreignField: 'movie_id',
          as: 'comments',
        },
      },
      {
        $unwind: {
          path: '$comments',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'comments.commentedBy',
          foreignField: '_id',
          as: 'comments.user',
        },
      },
      {
        $unwind: {
          path: '$comments.user',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          'comments.user.password': 0,
        },
      },
      {
        $group: {
          _id: '$_id',
          movieName: { $first: '$movieName' },
          isDeletedMovie: { $first: '$isDeletedMovie' },
          description: { $first: '$description' },
          image_url: { $first: '$image_url' },
          comments: { $push: '$comments' },
        },
      },
    ]);

    return successResponse(res, { data: movies }, 200);
  } catch (error) {
    console.log(error);
    return errorResponse(res, { data: 'Internal server error' }, 500);
  }
};

const getAllComments = async (req, res) => {
  try {
    const comments = await Comments.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'commentedBy',
          foreignField: '_id',
          as: 'user',
        },
      },
      {
        $unwind: {
          path: '$user',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'movies',
          localField: 'movie_id',
          foreignField: '_id',
          as: 'movies',
        },
      },
      {
        $unwind: {
          path: '$movies',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          comment: 2,
          id: '$_id',
          userName: '$user.userName',
          movieName: { $ifNull: ['$movies.movieName', ""] },
        },
      },
      {
        $unset: '_id',
      },
    ]); 

    return successResponse(res, { data: comments }, 200);
  } catch (error) {
    console.log(error)
    return errorResponse(res, { data: 'Internal server error' }, 500);
  }
}

const deleteCommentById = async (req, res) => {
  try {
    const commentId = req.params.id;

    const deletedComment = await Comments.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return errorResponse(res, { message: 'Comment not found' }, 404);
    }
    return successResponse(res, { message: 'Comment deleted successfully' }, 200);
  } catch (error) {
    console.log(error);
    return errorResponse(res, { message: 'Internal server error' }, 500);
  }
};

module.exports = { createMovie, removeMovie, getAllMovie, addCommentsByUser, getMoviesById, getAllComments, deleteCommentById };