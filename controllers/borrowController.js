const { Book, User } = require('../models');
const io = require('../server').io;

const requestBook = async (req, res) => {
  try {
    const { bookId } = req.body;
    const book = await Book.findByPk(bookId);
    if (book && book.available) {
      book.available = false;
      await book.save();
      io.emit('notification', 'A book has been requested');
      res.redirect('/borrow');
    } else {
      res.status(404).send('Book not available');
    }
  } catch (error) {
    res.status(500).send('Error requesting book');
  }
};

const listRequests = async (req, res) => {
  try {
    const books = await Book.findAll({ where: { userId: req.session.userId, available: false } });
    res.render('borrow/borrowRequests', { books });
  } catch (error) {
    res.status(500).send('Error fetching borrow requests');
  }
};

module.exports = {
  requestBook,
  listRequests
};
