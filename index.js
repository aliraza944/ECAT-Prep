const express = require("express");

require("dotenv/config");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const cookieParser = require("cookie-parser");
const questionRouter = require("./routes/postQuestions");
const progressRouter = require("./routes/getProgress");
const path = require("path");
app.use(express.json({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "PUT", "GET", "DELETE", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
app.use(cookieParser());
mongoose
  .connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connection secure");
  })
  .catch((error) => console.log(error));

app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/postquestions", questionRouter);
app.use("/progress", progressRouter);

app.use("/", express.static("client/build"));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

//error middleware
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
// Step 1:

// if (process.env.NODE_ENV === "production") {

// }

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`running on port ${port}`));
