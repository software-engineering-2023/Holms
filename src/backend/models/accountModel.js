const mongoose = require('mongoose');
const Client = require('./clientModel')

const accountSchema = new mongoose.Schema({

    accountNumber:{
        type: String,
        required:[true,"Please provide an account number"],
        minLength:13,
        maxLength:13,
        unique:true,
    },
    iban:{
        type: String,
        unique:true
        
    },
    type:{
        type: String,
        enum: ['Checkings', 'Savings'],
    default: 'Checkings',
    },
    currency:{
        type:String,
        required:[true,"Please provide a currency"]
    },
    balance:{
        type:Number,
        default:0
    },
    client: 
    {
        type: mongoose.Schema.ObjectId,
        ref: 'Client',
        
    },
    openingDate: Date,
      
})
const Account = mongoose.model('Account', accountSchema);

module.exports = Account;