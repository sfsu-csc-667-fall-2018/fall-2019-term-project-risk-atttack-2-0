/*const pgp = require('pg-promise')();
const connection = pgp(process.env.DATABASE_URL || "postgres://katiekirchner@localhost:5432/risk_db");

module.exports = connection;*/

const Users = require('./users.js');
const GameState = require('./gameState.js');

module.exports = {
    Users,
    GameState
};
