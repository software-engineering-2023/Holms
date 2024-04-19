const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  loanNumber: {
    type: String,
    required: true,
    unique: true,
  },

  loanPurpose: {
    type: String,
    required: true,
  },
  deadline: Date,
  dateIssued: {
    type: Date,
    default: Date.now(),
  },
  dueAmount: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["accepted", "rejected", "repaid", "unpaid", "pending"],
    default: "pending",
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
  type: {
    type: String,
    enum: ["car", "regular"],
    default: "regular",
  },
  client: {
    type: mongoose.Schema.ObjectId,
    ref: "Client",
  },
});
const Loan = mongoose.model("Loan", loanSchema);
module.exports = Loan;
