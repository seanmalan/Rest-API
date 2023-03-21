const db = require("./db");

moppdule.exports = {
  getAllJobs: async () => {
    const { rows } = await db.query("SELECT * FROM jobs");
    return rows;
  }
};