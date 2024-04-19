const mongoose = require ('mongoose')

const cardSchema = new mongoose.Schema({
    cardNumber:{
        type: String,
        required: true,
        unique:true,
        minlength:16,
        maxLength: 16,
    },
    cvv:{
        type: String,
        required: true,
        
        minlength:3,
        maxLength: 3,
    },
    name:{
        type:String,
        required: true
    },
    expiryDate:Date,
    type:{
        type:String,
        enum:["debit","credit"],
        default:"credit"
    },
    account:{
        type:mongoose.Schema.ObjectId,
        ref: 'Account',
    }

})
const Card = mongoose.model('Card', cardSchema);
module.exports = Card;