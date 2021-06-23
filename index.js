const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("hello world");
});
app.listen(5000, () => {
  console.log("running on port 5000");
});
