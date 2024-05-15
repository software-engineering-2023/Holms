const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const loanApplicationSchema = new Schema({
  // Inherit properties from base schema
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures unique email for each applicant
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  client: {
    type: mongoose.Schema.ObjectId,
    ref: "Client",
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  loanPurpose: {
    type: String,
    enum: ["car", "personal"],
    required: true,
  },
  loanTerm:{
    type:Number,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  employmentInfo: {
    type: String,
    required: true,
  },
  applicationDate: {
    type: Date,
    default: Date.now(),
  },
  status:{
    type: String,
    enum:["pending","accepted","rejected"],
    default:"pending"
  },
  account:{
    type:mongoose.Schema.ObjectId,
    ref: 'Account',
}
});
const LoanApp = mongoose.model("LoanApplication", loanApplicationSchema);

module.exports = LoanApp;
