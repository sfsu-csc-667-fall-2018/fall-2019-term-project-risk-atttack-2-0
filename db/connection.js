const pgp = require('pg-promise')();

console.log("ESTABLISHING CONNECTION WITH " + process.env.DATABASE_URL)
const connection = pgp(process.env.DATABASE_URL);

module.exports = connection;
