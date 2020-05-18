const db = require('./connection.js');

const createGame = (name, players, password, user_id1) =>
  db.any("INSERT INTO game (name, players, password, user_id1) VALUES ($1, $2, $3, $4) RETURNING id",
            [name, players, password, user_id1] );


const getGameInfo = (id) =>
  db.one("SELECT * from game where id = ${id} ORDER BY ID DESC LIMIT 1", {id});


const getUserGames = (id) =>
  db.any("select * from game where (user_id1 = ${id}) or (user_id2 = ${id}) or (user_id3 = ${id}) or (user_id4 = ${id}) ORDER BY ID DESC LIMIT 6", {id});


module.exports = {
  createGame,
  getGameInfo,
  getUserGames
};
