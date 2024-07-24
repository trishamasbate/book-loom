// module.exports = (sequelize, DataTypes) => {
//   const Book = sequelize.define('Book', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     author: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     synopsis: {
//       type: DataTypes.TEXT,
//       allowNull: true
//     },
//     available: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true
//     }
//   });

//   return Book;
// };

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Book extends Model {}

Book.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  sequelize,
  modelName: 'Book',
});

module.exports = Book;
