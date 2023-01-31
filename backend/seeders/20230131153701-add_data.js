'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('GpsData', [
        {
          DeviceId: '  D-1567',
          DeviceType: 'Aircraft',
          Timestamp: '31-08-2022T10:05:00.000Z',
          location: 'L1'
        },
        {
          DeviceId: '  D-1567',
          DeviceType: 'Aircraft',
          Timestamp: '31-08-2022T10:10:00.000Z',
          location: 'L1'
        },
        {
          DeviceId: '  D-1567',
          DeviceType: 'Aircraft',
          Timestamp: '31-08-2022T10:15:00.000Z',
          location: 'L1'
        },
        {
          DeviceId: '  D-1567',
          DeviceType: 'Aircraft',
          Timestamp: '31-08-2022T10:20:00.000Z',
          location: 'L1'
        },
        {
          DeviceId: '  D-1567',
          DeviceType: 'Aircraft',
          Timestamp: '31-08-2022T10:25:00.000Z',
          location: 'L2'
        },
        {
          DeviceId: '  D-1568',
          DeviceType: 'Personal',
          Timestamp: '31-08-2022T10:05:00.000Z',
          location: 'L3'
        },
        {
          DeviceId: '  D-1568',
          DeviceType: 'Personal',
          Timestamp: '31-08-2022T10:10:00.000Z',
          location: 'L3'
        },
        {
          DeviceId: '  D-1568',
          DeviceType: 'Personal',
          Timestamp: '31-08-2022T10:15:00.000Z',
          location: 'L3'
        },
        {
          DeviceId: '  D-1568',
          DeviceType: 'Personal',
          Timestamp: '31-08-2022T10:20:00.000Z',
          location: 'L3'
        },
        {
          DeviceId: '  D-1568',
          DeviceType: 'Personal',
          Timestamp: '31-08-2022T10:25:00.000Z',
          location: 'L3'
        },
        {
          DeviceId: '  D-1569',
          DeviceType: 'Asset',
          Timestamp: '31-08-2022T10:15:00.000Z',
          location: 'L4'
        },
        {
          DeviceId: '  D-1569',
          DeviceType: 'Asset',
          Timestamp: '31-08-2022T10:20:00.000Z',
          location: 'L4'
        },
        {
          DeviceId: '  D-1569',
          DeviceType: 'Asset',
          Timestamp: '31-08-2022T10:25:00.000Z',
          location: 'L1'
        },
        {
          Timestamp: '31-08-2022T10:35:00.000Z',
          location: 'L5'
        },
        {
          DeviceId: '  D-1571',
          DeviceType: 'Asset',
          Timestamp: '31-08-2022T10:35:00.000Z',
          location: 'L6'
        }
      ]);
    
  },

  async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('GpsData', null, {});
    
  }
};
