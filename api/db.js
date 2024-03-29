const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL
  ? {
      rejectUnauthorized: false,
    }
  : false,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  end: () => {
    pool.end();
  },
};

module.exports = pool;






// const { Pool } = require('pg');

// const pool = new Pool({
//     host: "db",
//     user: "postgres",
//     password: "password",
//     database: "postgres",
//     port: "5432",
//     max: 20,
//     idleTimeoutMillis: 30000,
//     connectionTimeoutMillis: 2000,
//   });  

// module.exports = {
//   query: (text, params, callback) => {
//     return pool.query(text, params, callback);
//   },
//   end: () => {
//     pool.end();
//   },
// };