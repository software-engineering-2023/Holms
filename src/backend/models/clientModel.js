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
      accountNumber:{
        type: String,
        unique: true,
        required: [false, 'Please provide an account number ID.'],
      },
      cards: [
        {
          name: String,
          cardNumber: String,
          expiryMonth: String,
          expiryYear: String,
          cvv: String,
          label: String,
        },
      ],
})
const Client = mongoose.model('Client', clientSchema);

module.exports = Client;