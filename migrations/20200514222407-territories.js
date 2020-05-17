'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable(
     'territory',
     {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
       },
       name: {
         type:Sequelize.STRING,
         allowNull: false
       },
       base_path: {
         type:Sequelize.STRING,
         allowNull: false
        }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('territory');
  }
};
