'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.addColumn(
     'game',
       'user_id1', {
         type: Sequelize.INTEGER
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('game', 'user_id1');
  }
};
