
const UserModel = require('../models/User'); 
const express=require('express')
const bcrypt = require('bcrypt');
const route=express.Router()


route.post('/register', async (req, res) => {
  try {
    const {
      username,
      email,
      phoneNumber,
      address,
      city,
      state,
      country,
      pincode,
      password,
      gender,
      dateOfBirth,
      eligibleToVote,
      isVerified,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new UserModel({
      username,
      email,
      phoneNumber,
      address,
      city,
      state,
      country,
      pincode,
      password: hashedPassword,
      gender,
      dateOfBirth,
      eligibleToVote,
      isVerified,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while registering the user' });
  }
});
  
  // route.get("/login", async (req, res) => {
  //   try {
  //     const users = await UserModel.find();
  //     res.json(users);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //     res.status(500).json({ error: 'Something went wrong' });
  //   }
  // });

  route.post('/login', async (req, res) => {
    try {
      const { phoneNumber, password } = req.body;
  
      // Find the user by phoneNumber
      const user = await UserModel.findOne({ phoneNumber });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      res.json({ message: 'Login successful', user: user });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
  
  module.exports = route;