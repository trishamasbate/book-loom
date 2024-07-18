const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize);
const Book = require('./book')(sequelize, Sequelize);

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
