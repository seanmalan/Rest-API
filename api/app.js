// const db = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();


app.use(cors());
app.use(express.json());


app.get("/test", async (req, res, next) => {
  try {
    res.send("Hello World!!!").status(200);
  } catch (error) {
    next(error);
  }
});


module.exports = app;