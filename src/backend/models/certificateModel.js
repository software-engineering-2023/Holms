const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  

  maturityDate:{
    type: Date,
  } ,
  creationDate: {
    type: Date,
    default: Date.now,
  },
  duration:
  {
    type:Number,
  },
  renewal: {
    type: Boolean,
    default: true,
  },
  interest: {
    type: Number,
    default: 0,
  },
  client: {
    type: mongoose.Schema.ObjectId,
    ref: "Client",
  },
});
const Certificate = mongoose.model("Certificate", certificateSchema);
module.exports = Certificate;
