const router = require('express').Router();
const { getBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/booksController');

router.get('/books', getBooks);
router.get('/books/books_id', getBookById);
router.post('/books', createBook);
router.put('/books/books_id', updateBook);
router.delete('/books/books_id', deleteBook);

module.exports = router;
