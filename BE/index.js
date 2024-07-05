const express = require("express");
const connectDB = require("./config/db");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/User.routes");
const morgan = require("morgan");
const movieRouter = require("./routes/Movie.routes");
const cors = require("cors");

require("dotenv").config();


morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use(express.json());
app.use("/auth/v1/", userRouter);
app.use('/movie/v1/', movieRouter)

const PORT = process.env.PORT;
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`server is start on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });