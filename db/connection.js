const Promise = require('bluebird');
const initOptions = {
    promiseLib: Promise
}
const pgp = require('pg-promise')(initOptions);

const connection = pgp(process.env.DATABASE_URL|| "postgres://Daniel@localhost:5432/risk_db");

module.exports = connection;