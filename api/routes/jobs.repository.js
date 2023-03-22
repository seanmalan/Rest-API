const { create } = require("domain");
const db = require("../db");

module.exports = {
  getAllJobs: async () => {
    try {
      const jobs = await db.query("SELECT * FROM jobs");
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
  }
};
