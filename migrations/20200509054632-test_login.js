'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable(
     'user_table',
     {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
       },
       username: {
         type:Sequelize.STRING,
         allowNull: false
       },
       password: {
         type: Sequelize.STRING,
         allowNull: false
       },
       email: {
         type: Sequelize.STRING,
         allowNull: false
       },
       createdAt: {
         type: Sequelize.DATE,
         defaultValue: Sequelize.literal('NOW()'),
         allowNull: false
       }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_table');
  }
};
