'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Notes', [
    {
      userId: 1,
      notebookId: 1,
      title: 'Progress Journal',
      content: 'Stressed out this week...'
    },
    {
      userId: 1,
      notebookId: 2,
      title: 'BinderKeeper',
      content: 'Boy, what a great idea for an app!'
    },
    {
      userId: 1,
      notebookId: 3,
      title: 'eBlockbuster',
      content: 'What if you could watch all the newest movies on the internet?!'
    },
    {
     userId: 2,
     notebookId: 7,
     title: 'Progress Journal',
     content: 'Stressed out this week...'
    },
    {
      userId: 2,
      notebookId: 8,
      title: 'BinderKeeper',
      content: 'Boy, what a great idea for an app!'
    },
    {
      userId: 2,
      notebookId: 9,
      title: 'eBlockbuster',
      content: 'What if you could watch all the newest movies on the internet?!'
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Notes', null, {});
  }
};
