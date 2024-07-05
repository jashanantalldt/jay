const bcrypt = require("bcryptjs");

const successResponse = (res, data, code = 200) => {
  return res.status(code).json(data);
};

const errorResponse = (res, data, code = 500) => {
  return res.status(code).json(data);
};


const encryptedString = async (str) => {
  const salt = await bcrypt.genSalt(10);
  const encryptedStr = await bcrypt.hash(str, salt);
  return encryptedStr;
};

const decryptedString = (bodyStr, dbStr) => {
  return bcrypt.compare(bodyStr, dbStr);
};

module.exports = {
  successResponse,
  errorResponse,
  encryptedString,
  decryptedString,
};