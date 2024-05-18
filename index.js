const express = require("express");
const app = express();
const Sequelize = require('sequelize');

// Parse requests of content type - application/json
app.use(express.json());
// Parse requests of content type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Connection to the database
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/marketplace');

// Import User model
const { User } = require('./models/user');
const { Category } = require('./models/category');

// Testing connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
    
const { createUser, updateUser, deleteUser, getUser } = require('./controllers/userController');
const {createCategory, updateCategory, deleteCategory, getCategory} = require('./controllers/categoryController');

// Users routes
app.get('/users/:id', getUser);
app.post('/users', createUser);
app.put('/users/update/:id', updateUser);
app.delete('/users/delete/:id', deleteUser);

// Category routes
app.get('/categories/:id', getCategory);
app.post('/categories', createCategory);
app.put('/categories/update/:id', updateCategory);
app.delete('/categories/delete/:id', deleteCategory);


// Simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to sequelize application." });
});

// Listen requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
