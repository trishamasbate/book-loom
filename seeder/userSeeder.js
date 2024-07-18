const bcrypt = require('bcrypt');
const { User } = require('../models');

const seedUsers = async () => {
  const hashedPassword = await bcrypt.hash('password123', 10);

  const users = [
    { 
      username: 'alice', 
      password: hashedPassword 
    },
    { 
      username: 'bob', 
      password: hashedPassword 
    },
    { 
      username: 'charlie', 
      password: hashedPassword 
    },
    { 
      username: 'dave', 
      password: hashedPassword 
    },
    { 
      username: 'eve', 
      password: hashedPassword 
    },
    { 
      username: 'frank', 
      password: hashedPassword 
    },
    { 
      username: 'grace', 
      password: hashedPassword 
    },
    { 
      username: 'heidi', 
      password: hashedPassword 
    },
    { 
      username: 'ivan', 
      password: hashedPassword 
    },
    { 
      username: 'judy', 
      password: hashedPassword 
    }
  ];

  await User.bulkCreate(users);
};

module.exports = seedUsers;
