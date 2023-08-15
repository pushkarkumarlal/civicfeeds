const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');

const userRoute=require('./routes/user')
const postRoute=require('./routes/post')
// Load environment variables from .env file
dotenv.config();
const server = express();
server.use(express.json()); 

// Enable CORS and Helmet middleware
server.use(cors());
server.use(helmet());

// Connect to MongoDB
mongoose.connect(process.env.mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1); // Exit the application if the database connection fails
});

server.listen(process.env.portnum, () => {
  console.log(`listing to  process.env ${process.env.portnum}`);
});

server.use('/users', userRoute);
server.use('/posts', postRoute);