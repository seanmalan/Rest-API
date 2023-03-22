const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/jobs");


app.use(cors());
app.use(express.json());


app.get("/test", async (req, res, next) => {
  try {
    res.send("Hello World!!!").status(200);
  } catch (error) {
    next(error);
  }
});

app.use("/jobs", router);




module.exports = app;