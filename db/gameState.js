const db = require('./connection.js');

const createGameState = (game_id) =>
  db.any("INSERT INTO game_state (game_id) VALUES ($1) RETURNING id, game_id",  [game_id] );

const getGameState = (game_id) =>
  db.one("SELECT * from game_state where game_id = ${game_id} ORDER BY ID DESC LIMIT 1", {game_id});

const updateGameState = (game_id, owner_column, playerId, armies_column, armies) =>
    db.one("UPDATE game_state SET " + owner_column + " = ${playerId}, "
            + armies_column + " = ${armies} WHERE game_id = ${game_id} RETURNING game_id", {game_id, playerId, armies});




module.exports = {
  createGameState,
  getGameState,
  updateGameState
};
