'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Parks', [
      {
        parkName: 'Lame Park',
        city: 'Dumb City',
        provinceState: 'Stupid State',
        country: 'THE country',
        opened: new Date('1800-1-05'),
        size: 'BIG',
        description: 'THE WORST',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        parkName: 'Jurassic Park',
        city: 'Trex-Town',
        provinceState: 'Mississippi',
        country: 'Georgia',
        opened: new Date('1800-1-05'),
        size: 'Very Tiny',
        description: 'You will be eaten',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        parkName: 'COOLEST Park',
        city: 'Dope City',
        provinceState: 'NOICE State',
        country: 'THAT country',
        opened: new Date('1420-4-20'),
        size: 'smol',
        description: 'A place that is super cool and better than others.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Parks', null, {});
  }
};
