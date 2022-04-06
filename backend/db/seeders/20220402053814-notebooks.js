'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Notebooks', [
    {
     userId: 1,
     title: 'App Academy'
    },
    {
      userId: 1,
      title: 'Coding Projects'
    },
    {
      userId: 1,
      title: 'Website Ideas'
    },
    {
      userId: 1,
      title: 'Random Thoughts'
    },
    {
      userId: 1,
      title: 'DeleteTesting1'
    },
    {
      userId: 1,
      title: 'DeleteTesting2'
    },
    {
      userId: 2,
      title: 'App Academy'
     },
     {
       userId: 2,
       title: 'Coding Projects'
     },
     {
       userId: 2,
       title: 'Website Ideas'
     },
     {
       userId: 2,
       title: 'Random Thoughts'
     },
     {
       userId: 2,
       title: 'DeleteTesting1'
     },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
