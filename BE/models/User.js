const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      require: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("User", UserSchema);