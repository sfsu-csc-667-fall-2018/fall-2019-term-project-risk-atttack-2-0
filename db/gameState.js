const db = require('./connection.js');

const createGameState = (game_id) =>
  db.any("INSERT INTO game_state (game_id) VALUES ($1) RETURNING id, game_id",  [game_id] );

const getGameState = (game_id) =>
  db.one("SELECT * from game_state where game_id = ${game_id}", { game_id});

const updateGameState = (username, password) =>
    db.one("SELECT id, username, createdat FROM users WHERE username=${username} and password=${password}", { username, password });

module.exports = {
  createGameState,
  getGameState,
  updateGameState
};
