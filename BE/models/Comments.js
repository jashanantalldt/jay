const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema(
  {
    movie_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    commentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    comment: {
        type: String,
        default: false
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Comments = mongoose.model("Comments", CommentsSchema);