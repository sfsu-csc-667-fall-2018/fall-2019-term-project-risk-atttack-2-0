'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.addColumn(
     'territory',
       'continent', {
         type:Sequelize.STRING
       }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('territory', 'continent');
  }
};
