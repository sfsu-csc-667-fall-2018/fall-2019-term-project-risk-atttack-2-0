const pgp = require('pg-promise')();

//console.log("ESTABLISHING CONNECTION WITH " + process.env.DATABASE_URL)
const connection = pgp(process.env.DATABASE_URL || "postgres://katiekirchner@localhost:5432/risk_db");

module.exports = connection;
