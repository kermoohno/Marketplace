const express = require('express');
const { createUser, updateUser, deleteUser, getUser } = require('../controllers/userController');
const router = express.Router();

router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/update/:id', updateUser);
router.delete('/users/delete/:id', deleteUser);

module.exports = router;
