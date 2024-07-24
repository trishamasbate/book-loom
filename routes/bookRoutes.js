const express = require('express');
const { addBook, editBook, deleteBook, listBooks } = require('../controllers/bookController');

const router = express.Router();

router.get('/', listBooks);
router.get('/add', (req, res) => res.render('books/addBook'));
router.post('/add', addBook);
router.post('/edit', editBook);
router.post('/delete', deleteBook);

module.exports = router;