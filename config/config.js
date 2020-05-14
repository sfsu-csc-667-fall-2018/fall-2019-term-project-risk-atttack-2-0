require('dotenv').config();
module.exports = {
  "development": {
    "username": "postgres",
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  },
  "test": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  } };