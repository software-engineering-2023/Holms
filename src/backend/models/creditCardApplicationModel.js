const { application } = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const creditCardApplicationSchema = new Schema({
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
  annualIncome: {
    type: Number,
    required: true,
  },
  employmentStatus: {
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

const CCApp = mongoose.model("CCApplication", creditCardApplicationSchema);

module.exports = CCApp;
