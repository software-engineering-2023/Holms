const mongoose = require('mongoose');
// const validator = require('validator');

const bankerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username.'],
    unique: true,
    maxlength: [30, 'A username must have less or equal then 30 characters'],
    // minlength: [8, 'A username must have more or equal to 8 characters'],
  },
  name:{
    type:String,
    required: [true, 'Please provide a name.'],
    
},
mobileNumber: {
    type: String,
    required: [true, 'Please provide a phone number.'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    select: false,
    minLength: [8, 'Password must be at least 8 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
  },
  creationDate:
  { type: Date, default:Date.now},
});

const Banker = mongoose.model('Banker', bankerSchema);

module.exports = Banker;
