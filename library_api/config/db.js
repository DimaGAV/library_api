const mongoose = require('mongoose');

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
