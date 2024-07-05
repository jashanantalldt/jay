const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    movieName: {
        type: String,
        require: false
    },
    isDeletedMovie: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        require: false
    },
    image_url: {
      type: String,
      require: false
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comments"
    }]
  },
  {
    timestamps: true,
  }
);

module.exports = Movie = mongoose.model("Movie", MovieSchema);