const express = require("express");
const router = express.Router();
const jobsRepository = require("./jobs.repository");

router.get("/jobs", async (req, res, next) => {
  try {
    const jobs = await jobsRepository.getAllJobs();
    res.json(jobs);
  } catch (error) {
    next(error);
  }
});