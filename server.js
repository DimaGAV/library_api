require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('./library_api/middleware/logger');
const errorHandler = require('./library_api/middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/users', require('./library_api/routes/users'));
app.use('/books', require('./library_api/routes/books'));

// 404 Error
app.use((req, res) => {
  res.status(404).json({ message: 'Роут не найден' });
});

// Error handler
app.use(errorHandler);

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Подключено к MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Сервер запущен на порту ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('Ошибка подключения к MongoDB:', err);
  });
