const db = require('./connection.js');

const create = (email, password, username) =>
  db.any("INSERT INTO users (email, password, username) VALUES ($1, $2, $3) RETURNING id, email, username",  [email, password, username] );

const findById = (id) =>
      db.one("SELECT (id, email, createdat) FROM users WHERE id=${id}", {id} );

const findByEmailAndPassword = (email, password) =>
  db.one("SELECT id, email, createdat FROM users WHERE email=${email} and password=${password}", { email, password });

const findByUsernameAndPassword = (username, password) =>
    db.one("SELECT id, username, createdat FROM users WHERE username=${username} and password=${password}", { username, password });

const getHash = (username) =>
    db.one("SELECT id, createdat, password FROM users WHERE username=${username}", {username} );

const findByName = (player1, player2, player3, player4) =>
    db.any("SELECT id, username FROM users WHERE (username=${player1}) or (username=${player2}) or (username=${player3}) or (username=${player4}) ", {player1, player2, player3, player4} );


const findPlayersById = (player1, player2, player3, player4) =>
    db.any("SELECT id, username FROM users WHERE (id=${player1}) or (id=${player2}) or (id=${player3}) or (id=${player4}) ", {player1, player2, player3, player4} );



module.exports = {
  create,
  findByEmailAndPassword,
  findById,
  findByName,
  findByUsernameAndPassword,
  getHash,
  findPlayersById
};
