'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Notebook.associate = function(models) {
    // associations can be defined here
    Notebook.hasMany(models.Note, { foreignKey: 'notebookId', hooks: true, onDelete: "CASCADE"  });
    Notebook.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Notebook;
};
