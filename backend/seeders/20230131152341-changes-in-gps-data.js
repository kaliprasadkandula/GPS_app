'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('GPSData', 'Timestamp', {
              type: Sequelize.STRING,
              allowNull: true,
          }, {
              transaction,
          })
      ])
  },

  down: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('GPSData', 'Timestamp', {
              type: Sequelize.DATE,
              allowNull: true,
          }, {
              transaction,
          })
      ])
  }
};