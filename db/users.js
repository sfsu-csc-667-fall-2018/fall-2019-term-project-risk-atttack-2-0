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

module.exports = {
  create,
  findByEmailAndPassword,
  findById,
  findByUsernameAndPassword,
  getHash
};