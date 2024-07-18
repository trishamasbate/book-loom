const { Book, User } = require('../models');

const seedBooks = async () => {
  const users = await User.findAll();

  const books = [
    { 
      title: 'The Great Gatsby', 
      author: 'F. Scott Fitzgerald', 
      userId: users[0].id 
    },
    { 
      title: '1984', 
      author: 'George Orwell', 
      userId: users[1].id 
    },
    { 
      title: 'To Kill a Mockingbird', 
      author: 'Harper Lee', 
      userId: users[2].id 
    },
    { 
      title: 'Pride and Prejudice', 
      author: 'Jane Austen', 
      userId: users[3].id 
    },
    { 
      title: 'The Catcher in the Rye', 
      author: 'J.D. Salinger', 
      userId: users[4].id 
    },
    { 
      title: 'Moby-Dick', 
      author: 'Herman Melville', 
      userId: users[5].id 
    },
    { 
      title: 'War and Peace', 
      author: 'Leo Tolstoy', 
      userId: users[6].id 
    },
    { 
      title: 'Ulysses', 
      author: 'James Joyce', 
      userId: users[7].id 
    },
    { 
      title: 'The Odyssey', 
      author: 'Homer', 
      userId: users[8].id 
    },
    { 
      title: 'Crime and Punishment', 
      author: 'Fyodor Dostoevsky', 
      userId: users[9].id 
    }
  ];

  await Book.bulkCreate(books);
};

module.exports = seedBooks;
