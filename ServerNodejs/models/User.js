const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: String,
  city: String,
  state: String,
  country: String,
  pincode: String,
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  dateOfBirth: Date,
  eligibleToVote: {
    type: Boolean,
    default: false,
  },
  lastVotedAt: Date,
  isVerified: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;