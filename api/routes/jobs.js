const express = require("express");
const router = express.Router();
const jobsRepository = require("./jobs.repository");
const { celebrate, Joi, errors, Segments } = require("celebrate");
const { auth } = require('express-oauth2-jwt-bearer');
const { requiredScopes } = require('express-oauth2-jwt-bearer');


const checkReadScopes = requiredScopes('read:jobs');
const checkAdminScopes = requiredScopes('admin:jobs');


const jwtCheck = auth({
  audience: 'https://strongfencing.com',
  issuerBaseURL: 'https://dev-8a2dkllk1a5kywvs.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

const acceptedJobStatuses = [
  "Pending",
  "Active",
  "Completed",
  "Invoiced",
  "Cancelled",
  "To Price",
];



router.post("/",
jwtCheck, checkAdminScopes,
celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    clientname: Joi.string().required(),
    location: Joi.string().required(),
    description: Joi.string().required(),
    clientphonenumber: Joi.string().required(),
    jobstatus: Joi.string().valid(...acceptedJobStatuses).required(),
    userid: Joi.number().required(),
    jobdate: Joi.date().required(),
  }),
}), async (req, res, next) => {
  try {
    const job = await jobsRepository.createJob(req.body);
    res.send(job).status(201);
  } catch (error) {
    next(error);
  }
});


router.put("/:id", async (req, res, next) => {
  try {
    const job = await jobsRepository.updateJob(req.params.id, req.body);
    res.send(job).status(200);
  } catch (error) {
    next(error);
  }
});




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





router.use(errors());

module.exports = router;