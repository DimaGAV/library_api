const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/usersController');

router.get('/', getUsers);
router.get('/:_id', getUserById);
router.post('/', createUser);
router.put('/:_id', updateUser);
router.delete('/:_id', deleteUser);

module.exports = router;
