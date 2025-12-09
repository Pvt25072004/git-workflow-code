const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose
  .connect("mongodb://localhost:27017/demo_cloudcomputing")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
app.listen(8080, () => {
  console.log("Server is running on port 8080 kk");
});
