
// Import the Express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a simple GET route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 3002;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
