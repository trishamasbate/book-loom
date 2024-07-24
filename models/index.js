const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user');
const Book = require('./book');

User.hasMany(Book, { as: 'books' });
Book.belongsTo(User, {
  foreignKey: 'userId',
  as: 'owner'
});

module.exports = {
  sequelize,
  User,
  Book
};
