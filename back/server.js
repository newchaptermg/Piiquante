// Load environment variables from .env file
const dotenv = require('dotenv');
dotenv.config(); // This loads the variables from the .env file into process.env

// Load other dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
const userRoutes = require('./routes/user');
app.use('/api/auth', userRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

const sauceRoutes = require('./routes/sauce');
app.use('/api/sauces', sauceRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
