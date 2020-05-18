const db = require('./connection.js');

const createGame = (name, players, password) =>
  db.any("INSERT INTO game (name, players, password) VALUES ($1, $2, $3) RETURNING id",  [name, players, password] );

const addPlayerToGame = (userid, armies, username) =>
    db.any("INSERT INTO in_game_players (userid, armies, username) VALUES ($1, $2, $3) RETURNING userid", [userid, armies, username]);

const givePlayerArmies = (userid, armies) =>
    db.one("UPDATE in_game_players SET armies=${armies} WHERE userid=${userid}", {userid, armies} );

const giveAllPlayersInitialArmies = (armies) =>
    db.any("UPDATE in_game_players SET armies=${armies}", {armies} );

const countAmountOfPlayers  = () =>
    db.any("SELECT COUNT(userid) FROM in_game_players" );

module.exports = {
  createGame,
  givePlayerArmies,
  addPlayerToGame,
  giveAllPlayersInitialArmies,
  countAmountOfPlayers
};
