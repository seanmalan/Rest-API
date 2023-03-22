const express = require("express");
const router = express.Router();
const jobsRepository = require("./jobs.repository");

router.get("/", async (req, res, next) => {
  try {
    const jobs = await jobsRepository.getAllJobs();
    res.send(jobs).status(200);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const job = await jobsRepository.getJobById(req.params.id);
    console.log(req.params.id)
    res.send(job).status(200);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const job = await jobsRepository.createJob(req.body);
    res.send(job).status(201);
  } catch (error) {
    next(error);
  }
});




// have a route with a variable for the job status
// router.get("/", async (req, res, next) => {
//   try {
//     // get the status from the request
//     const status = req.params.status;
//    console.log(status);
//   // call the repo with the status
//   // send the response
//     const jobs = await jobsRepository.getJobsByStatus(req.params.status);
//     res.send(jobs).status(200);
//   } catch (error) {
//     next(error);
//   }
// });



module.exports = router;