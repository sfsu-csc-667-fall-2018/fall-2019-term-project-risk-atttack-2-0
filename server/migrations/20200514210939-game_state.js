'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable(
     'game_state',
     {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
       },
       game_id: {
         type: Sequelize.INTEGER
       },
       t1_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0
       },
       t1_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0
       },
       t2_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0
       },
       t2_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0
       },
       t3_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0
       },
       t3_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0
       },
       t4_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0
       },
       t4_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t5_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t5_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t6_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t6_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t7_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t7_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t8_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t8_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t9_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t9_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t10_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t10_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t11_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t11_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t12_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t12_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t13_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t13_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t14_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t14_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t15_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t15_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t16_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t16_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t17_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t17_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t18_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t18_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t19_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t19_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t20_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t20_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t21_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t21_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t22_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t22_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t23_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t23_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t24_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t24_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t25_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t25_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t26_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t26_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t27_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t27_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t28_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t28_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t29_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t29_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t30_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t30_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t31_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t31_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t32_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t32_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t33_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t33_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t34_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t34_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t35_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t35_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t36_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t36_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t37_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t37_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t38_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t38_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t39_owner: {
         type: Sequelize.INTEGER,
         defaultValue: 0

       },
       t39_armies: {
         type: Sequelize.INTEGER,
         defaultValue: 0

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
    return queryInterface.dropTable('game_state');
  }
};
