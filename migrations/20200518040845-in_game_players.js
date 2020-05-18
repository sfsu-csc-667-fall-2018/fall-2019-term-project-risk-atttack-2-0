'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
        'in_game_players', {
          inGameId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          userid: {
            type: Sequelize.INTEGER,
            foreignKey: true,
          },
          createdat: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('NOW()'),
            allowNull: false
          },
          armies: {
            type:Sequelize.INTEGER,
            allowNull: false,
          },
          username: {
            type:Sequelize.STRING,
            allowNull: false,
            unique: true,
            foreignKey: true
          },
        }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('in_game_players');
  } };