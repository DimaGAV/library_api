const router = require('express').Router();
const { getBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/booksController');

router.get('/', getBooks);
router.get('/:_id', getBookById);
router.post('/', createBook);
router.put('/:_id', updateBook);
router.delete('/:_id', deleteBook);

module.exports = router;
