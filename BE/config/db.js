const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URL;
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connect");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;