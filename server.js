const express = require("express");
const app = express();

const cors = require("cors");
var multer = require("multer");
var upload = multer();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());
// const mongoErrors = require("mongoose-mongodb-errors");
// mongoose.Promise = global.Promise;
// mongoose.plugin(mongoErrors);
let url = 3002 || 3001 || 3003;
const route = require("./routes/routes");
app.use(express.json());


app.use("/uploads", express.static("./uploads"));
app.use("/", route);
app.use("*", (req, res, next) => {
  req.status = 404;
  const error = new Error("Route not found");
  res.json({
    message: error.message,
    stack: error.stack,
  });
  next();
});
app.listen(url, () => {
  console.log("connected");
});
