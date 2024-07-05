const express = require("express");
const { createNewUser, loginUser } = require("../controllers/User.controllers");

const userRouter = express.Router();

userRouter.post("/signup", createNewUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;