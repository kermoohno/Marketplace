// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define a port for the server to listen on
const port = 3000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and have it listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
