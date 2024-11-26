const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userCategory: {
    type: String,
    required: true
  },
  regNo: {
    type: String,
    required: true
  },
  nic: {
    type: String,
    required: true
  },
  pNo: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;