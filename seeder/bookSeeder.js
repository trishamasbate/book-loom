const { Book, User } = require('../models');

const seedBooks = async () => {
  const users = await User.findAll();

  const books = [
    { 
      title: 'The Great Gatsby', 
      author: 'F. Scott Fitzgerald', 
      synopsis: 'A novel about the American dream and the roaring twenties.', 
      userId: users[0].id 
    },
    { 
      title: '1984', 
      author: 'George Orwell', 
      synopsis: 'A dystopian novel set in a totalitarian society under constant surveillance.', 
      userId: users[1].id 
    },
    { 
      title: 'To Kill a Mockingbird', 
      author: 'Harper Lee', 
      synopsis: 'A story of racial injustice in the Deep South.', 
      userId: users[2].id 
    },
    { 
      title: 'Pride and Prejudice', 
      author: 'Jane Austen', 
      synopsis: 'A romantic novel that critiques the British landed gentry.', 
      userId: users[3].id 
    },
    { 
      title: 'The Catcher in the Rye', 
      author: 'J.D. Salinger', 
      synopsis: 'A story about teenage rebellion and angst.', 
      userId: users[4].id 
    },
    { 
      title: 'Moby-Dick', 
      author: 'Herman Melville', 
      synopsis: 'A whaling voyage that explores complex themes of fate and obsession.', 
      userId: users[5].id 
    },
    { 
      title: 'War and Peace', 
      author: 'Leo Tolstoy', 
      synopsis: 'An epic novel set during the Napoleonic Wars.', 
      userId: users[6].id 
    },
    { 
      title: 'Ulysses', 
      author: 'James Joyce', 
      synopsis: 'A modernist novel that chronicles a day in the life of Leopold Bloom.', 
      userId: users[7].id 
    },
    { 
      title: 'The Odyssey', 
      author: 'Homer', 
      synopsis: 'An ancient Greek epic poem about the adventures of Odysseus.', 
      userId: users[8].id 
    },
    { 
      title: 'Crime and Punishment', 
      author: 'Fyodor Dostoevsky', 
      synopsis: 'A psychological novel about the moral dilemmas of a poor ex-student.', 
      userId: users[9].id 
    }
  ];

  await Book.bulkCreate(books);
};

module.exports = seedBooks;
