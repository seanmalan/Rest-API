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
      return job.rows[0];
    } catch (error) {
      throw Error(error);
    }
  },

  getJobsByStatus: async (status) => {
    try {
      const jobs = await db.query("SELECT * FROM jobs WHERE jobstatus = $1", [status]);
      return jobs.rows;
    } catch (error) {
      throw Error(error);
    }
  }
};
