
const UserModel = require('../models/User'); 
const express=require('express')

const route=express.Router()

route.post("/", async (req, res) => {
    console.log(req.body)
    try {
      const { username, phonenum, address, pincode } = req.body;
      const newUser = new UserModel({ username, phonenum, address, pincode });
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
  
  route.get("/", async (req, res) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

  module.exports = route;