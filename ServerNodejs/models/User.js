const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  phonenum: String,
  address: String,
  pincode: String,
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;