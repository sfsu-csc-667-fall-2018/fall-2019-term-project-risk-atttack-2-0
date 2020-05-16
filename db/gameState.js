const db = require('./connection.js');

const createGameState = (game_id) =>
  db.any("INSERT INTO game_state (game_id) VALUES ($1) RETURNING id, game_id",  [game_id] );

const getGameState = (game_id) =>
  db.one("SELECT * from game_state where game_id = ${game_id}", { game_id});

const updateGameState = (column, value, game_id) =>
    db.one("UPDATE game_state SET " + column + " = ${value} WHERE game_id = ${game_id} RETURNING game_id", {value, game_id });

module.exports = {
  createGameState,
  getGameState,
  updateGameState
};
