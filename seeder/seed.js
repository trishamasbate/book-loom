const { sequelize } = require('../models');
const seedUsers = require('./userSeeder');
const seedBooks = require('./bookSeeder');

const seed = async () => {
  try {
    await sequelize.sync({ force: true });

    await seedUsers();
    await seedBooks();

    console.log('Seed data has been added successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    sequelize.close();
  }
};

seed();
