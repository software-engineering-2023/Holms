const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const baseRequestSchema = new Schema({
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
  dateOfBirth: {
    type: Date,
    required: true,
  },
  client: {
    type: mongoose.Schema.ObjectId,
    ref: "Client",
  },
});
const Base = mongoose.model('BaseRequest', baseRequestSchema);

module.exports = Base;
