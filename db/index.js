const pgp = require('pg-promise')();
const connection = pgp(process.env.DATABASE_URL || "postgres://katiekirchner@localhost:5432/risk_db");

// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const port = 3000
//
// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' })
// })



module.exports = connection;
