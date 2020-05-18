const db = require('./connection.js');

const createGame = (name, players, password) =>
  db.any("INSERT INTO game (name, players, password) VALUES ($1, $2, $3) RETURNING id",  [name, players, password] );


module.exports = {
  createGame
};
