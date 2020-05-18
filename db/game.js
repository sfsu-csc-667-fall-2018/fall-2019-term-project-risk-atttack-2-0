const db = require('./connection.js');

const createGame = (name, players, password, user_id1) =>
  db.any("INSERT INTO game (name, players, password, user_id1) VALUES ($1, $2, $3, $4) RETURNING id",
            [name, players, password, user_id1] );


const getGameInfo = (id) =>
  db.one("SELECT * from game where id = ${id} ORDER BY ID DESC LIMIT 1", {id});


module.exports = {
  createGame,
  getGameInfo
};
