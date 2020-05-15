const db = require('./connection.js');

const create = (email, password, username) =>
  db.any("INSERT INTO users (email, password, username) VALUES ($1, $2, $3) RETURNING id, email",  [email, password, email] );

const findById = id =>
  db.one("SELECT id, email, created_at From users where WHERE id=${1}", [id]);

const findByEmailAndPassword = (email, password) =>
  db.one("SELECT id, email, created_at FROM users WHERE email=${email} and password=${password}", { email, password });

module.exports = {
  create,
  findByEmailAndPassword,
  findById
};