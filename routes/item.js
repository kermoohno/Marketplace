const express = require('express');
const { createItem, updateItem, deleteItem, getItem, getAllItems } = require('../controllers/itemController');
const router = express.Router();

router.get('/items/:id', getItem);
router.get('/items');
router.post('/items/create', createItem);
router.put('/items/update/:id', updateItem);
router.delete('/items/delete/:id', deleteItem);

module.exports = router;
