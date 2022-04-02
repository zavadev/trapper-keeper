'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    userId: DataTypes.INTEGER,
    notebookId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
    Note.belongsTo(models.Notebook, { foreignKey: 'notebookId'});
    Note.belongsTo(models.User, { foreignKey: 'userId'})
  };
  return Note;
};
