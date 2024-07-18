const { Book, User } = require('../models');

const addBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = await Book.create({ title, author, userId: req.session.userId });
    res.redirect('/books');
  } catch (error) {
    res.status(500).send('Error adding book');
  }
};

const editBook = async (req, res) => {
  try {
    const { id, title, author } = req.body;
    const book = await Book.findByPk(id);
    if (book && book.userId === req.session.userId) {
      book.title = title;
      book.author = author;
      await book.save();
      res.redirect('/books');
    } else {
      res.status(403).send('Unauthorized');
    }
  } catch (error) {
    res.status(500).send('Error editing book');
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.body;
    const book = await Book.findByPk(id);
    if (book && book.userId === req.session.userId) {
      await book.destroy();
      res.redirect('/books');
    } else {
      res.status(403).send('Unauthorized');
    }
  } catch (error) {
    res.status(500).send('Error deleting book');
  }
};

const listBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ where: { userId: req.session.userId } });
    res.render('books/listBooks', { books });
  } catch (error) {
    res.status(500).send('Error fetching books');
  }
};

module.exports = {
  addBook,
  editBook,
  deleteBook,
  listBooks
};
