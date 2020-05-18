'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable(
     'game',
     {
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
       name: {
         type:Sequelize.STRING,
         allowNull: false
       },
       players: {
         type: Sequelize.INTEGER
       },
       password: {
           type:Sequelize.STRING,
       },
       status: {
           type:Sequelize.STRING,
       }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('game');
  }
};
