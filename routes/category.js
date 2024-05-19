const express = require('express');
const { createCategory, updateCategory, deleteCategory, getCategory } = require('../controllers/');
const router = express.Router();

router.get('/categories/:id', getCategory);
router.post('/categories', createCategory);
router.put('/categories/update/:id', updateCategory);
router.delete('/categories/delete/:id', deleteCategory);

module.exports = router;
