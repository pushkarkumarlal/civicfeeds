
const UserModel = require('../models/User'); 
const express=require('express')
const bcrypt = require('bcrypt');
const route=express.Router();
const jwt = require('jsonwebtoken');
const authenticateToken = require('../authenticate');


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

  route.post('/login', async (req, res) => {
    try {
      const { phoneNumber, password } = req.body;
      const user = await UserModel.findOne({ phoneNumber });
      if (!user) {
        return res.status(401).json({ error: 'Invalid phone Number' });
      }
      const passwordMatch = await bcrypt.compare(password, user.password); 
      const hashedPassword = await bcrypt.hash(password, 10);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid Password' });
      }
      const token = jwt.sign({ userId: user._id }, process.env.secretKeyForToken, { expiresIn: '3d' });
      res.json({ message: 'Login successful', user: user , token:token});
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

  route.put('/edit',authenticateToken, async (req, res) => {
    try {
      const userId = req.userId;
      const updates = req.body;
      if (updates.password) {
        updates.password = await bcrypt.hash(updates.password, 10);
      }
  
      const updatedUser = await UserModel.findByIdAndUpdate(userId, updates, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

  route.delete('/delete', authenticateToken, async (req, res) => {
  try {
    const userId = req.userId; // Get the user ID from the authenticated token
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

  
  
  module.exports = route;