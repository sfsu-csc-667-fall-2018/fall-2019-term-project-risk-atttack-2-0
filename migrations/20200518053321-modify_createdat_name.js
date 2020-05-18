'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'createdAt', 'createdat', {
      type: Sequelize.DATE,
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'createdat', 'createdAt', {
      type: Sequelize.DATE,
    })
  }
};
