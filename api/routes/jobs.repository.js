const { create } = require("domain");
const db = require("../db");

module.exports = {
  getAllJobs: async () => {
    try {
      const jobs = await db.query("SELECT * FROM jobs");

      if (jobs.rows.length === 0) {
        throw Error("No jobs found");
      }

      return jobs.rows;
    } catch (error) {
      throw Error(error);
    }
  },

  getJobById: async (id) => {
    try {
      const job = await db.query("SELECT * FROM jobs WHERE id = $1", [id]);
      if (job.rows.length === 0) {
        throw Error("No job found");
      }
      return job.rows[0];
      

    } catch (error) {
      throw Error(error);
    }
  },

  createJob: async (job) => {
    try {
      const newJob = await db.query(
        "INSERT INTO jobs (jobtitle, , clientName, location, description, clientPhoneNumber, jobstatus, userId, jobDate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [job.jobtitle, job.clientName, job.location, job.description, job.clientPhoneNumber, job.jobstatus, job.userId, job.jobDate]
      );
      return newJob.rows[0];
    } catch (error) {
      throw Error(error);
    }
  },

  updateJob: async (id, job) => {
    try {
      const updatedJob = await db.query(
        "UPDATE jobs SET jobtitle = $1, clientName = $2, location = $3, description = $4, clientPhoneNumber = $5, jobstatus = $6, userId = $7, jobDate = $8 WHERE id = $9 RETURNING *",
        [job.jobtitle, job.clientName, job.location, job.description, job.clientPhoneNumber, job.jobstatus, job.userId, job.jobDate, id]
      );
      return updatedJob.rows[0];
    } catch (error) {
      throw Error(error);
    }
  },
};
