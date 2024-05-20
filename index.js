const express = require('express');
const path = require('path');
const app = express();
const Sequelize = require('sequelize');

// Parse requests of content type - application/json
app.use(express.json());
// Parse requests of content type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Connection to the database
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/marketplace');

// Import models
const { User } = require('./models/user');
const { Category } = require('./models/category');
const { Item } = require('./models/item');

// Testing connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Import controllers
const { createUser, updateUser, deleteUser, getUser } = require('./controllers/userController');
const { createCategory, updateCategory, deleteCategory, getCategory } = require('./controllers/categoryController');
const { createItem, updateItem, deleteItem, getItem, getAllItems } = require('./controllers/itemController');

// Routes
app.get('/users/:id', getUser);
app.post('/users', createUser);
app.put('/users/update/:id', updateUser);
app.delete('/users/delete/:id', deleteUser);

app.get('/categories/:id', getCategory);
app.post('/categories', createCategory);
app.put('/categories/update/:id', updateCategory);
app.delete('/categories/delete/:id', deleteCategory);

app.get('/items/:id', getItem);
app.get('/items', getAllItems);
app.post('/items/create', createItem);
app.put('/items/update/:id', updateItem);
app.delete('/items/delete/:id', deleteItem);

// Serve static files from the "css" and "js" directories
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

// Serve the index.html file from the "views" directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Listen requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
