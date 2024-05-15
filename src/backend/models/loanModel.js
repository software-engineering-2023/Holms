const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({

  loanPurpose: {
    type: String,
    enum: ["car", "personal"],
    default: "personal",
    required:true,
  },
  deadline: Date,
  loanTerm:{
    type:Number,
    required: true,
  },
  dateIssued: {
    type: Date,
    default: Date.now(),
  },
  dueAmount: {
    type: Number,
  },
  status: {
    type: String,
    enum: [ "repaid", "unpaid"],
    default: "unpaid",
  },
  monthlyIncome: {
    type: Number,
  },
  loanedAmount: {
    type: Number,
  },
  baseInterest: {
    type: Number,
  },
  
  client: {
    type: mongoose.Schema.ObjectId,
    ref: "Client",
  },
});
const Loan = mongoose.model("Loan", loanSchema);
module.exports = Loan;
