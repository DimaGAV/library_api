const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/usersController');

router.get('/users', getUsers);
router.get('/users/users_id', getUserById);
router.post('/users', createUser);
router.put('/users/users_id', updateUser);
router.delete('/users/users_id', deleteUser);

module.exports = router;
