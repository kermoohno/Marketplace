const express = require('express');
const { createItem, updateItem, deleteItem, getItem } = require('../controllers/itemController');
const router = express.Router();

router.get('/items/:id', getItem);
router.post('/items', createItem);
router.put('/items/update/:id', updateItem);
router.delete('/items/delete/:id', deleteItem);

module.exports = router;
