'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
        'users', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('NOW()'),
            allowNull: false
          },
          email: {
            type:Sequelize.STRING,
            allowNull: false,
            unique: true
          },
          password: {
            type:Sequelize.STRING,
            allowNull: false
          }
        }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  } };