const User = require("../models/User");
const {
  errorResponse,
  encryptedString,
  successResponse,
  decryptedString,
} = require("../utils/common");

const createNewUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return errorResponse(res, { data: "User already exist" }, 400);
    } else {
      const encryptPass = await encryptedString(password);
      user = new User({
        userName,
        email,
        password: encryptPass,
      });
      await user.save();
      return successResponse(res, { data: "User successfully registerd" });
    }
  } catch (error) {
    console.log(error);
    return errorResponse(res, { data: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return errorResponse(res, { data: "Invalid credentials" }, 400);
    }

    const isMatch = await decryptedString(password, user?.password);
    if (!isMatch) {
      return errorResponse(res, { data: "Invalid credentials" }, 400);
    }

    await user.save();
    const response = {
        id: user.id,
        userName: user.userName,
        email: user.email,
        isAdmin: user.email === 'admin@gmail.com' ? true : false
    }
    return successResponse(res, response);
  } catch (error) {
    console.log(error);
    return errorResponse(res, { msg: "Internal server error" });
  }
};

module.exports = { createNewUser, loginUser };