const Book = require('../models/Book');

// Получить все книги
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
};

// Получить книгу по id
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params._id);
    if (!book) return res.status(404).json({ message: 'Книга не найдена' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
};

// Создать книгу
exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    if (error.name === 'ValidationError') {
      // Если ошибка валидации, возвращаем подробное сообщение
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: 'Ошибка валидации', errors });
    }
    res.status(500).json({ message: 'Не удалось создать книгу' });
  }
};


// Обновить книгу
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params._id, req.body, { new: true });
    if (!book) return res.status(404).json({ message: 'Книга не найдена' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось обновить книгу' });
  }
};

// Удалить книгу
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params._id);
    if (!book) return res.status(404).json({ message: 'Книга не найдена' });
    res.json({ message: 'Книга удалена' });
  } catch (error) {
    res.status(500).json({ message: 'Не удалось удалить книгу' });
  }
};
