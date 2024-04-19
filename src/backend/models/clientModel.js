const mongoose = require('mongoose');


const clientSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    name:{
        type:String,
        required: [true, 'Please provide a name.'],
        
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        // validate: [validator.isEmail, 'Please provide a valid email.'],
      },
      password: {
        type: String,
        required: true,
        select: false,
        // minLength: 8,
      },
      mobileNumber: {
        type: String,
        required: [true, 'Please provide a phone number.'],
      },
      address: {
        type: String,
        required: [true, 'Please provide an address'],
      },
      nationalId: {
        type: String,
        unique: true,
        required: [true, 'Please provide a national ID.'],
      },
     
      cards: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Card',
        },
      ],
      reminders: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Reminder',
        },
      ],
      notifications: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Notification',
        },
      ],
      reports: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Report',
        },
      ],
      certificates: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Certificate',
        },
      ],
      accounts: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Account',
        },
      ],
      loans: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Loan',
        },
      ],
      points:{
        type: Number,
        default: 0,
      }

})
const Client = mongoose.model('Client', clientSchema);

module.exports = Client;