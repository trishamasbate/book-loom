module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });

  return Book;
};
