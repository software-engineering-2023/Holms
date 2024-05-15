const Loan = require("../models/loanModel");
const Client = require("../models/clientModel");
const catchAsync = require('../utils/catchAsync');


exports.requestLoan = catchAsync(async (req, res, next) => {
  const newAccount = await Account.create(req.body)
    .then((result) => {
      return result; // Forward the result for further processing
    })
    .catch((error) => {
      console.error("Error creating account:", error.message);
      throw error; // Re-throw the error for further handling
    });
  if (newAccount == null) {
    res.status(404).json({
      status: "fail",
      data: {
        error: "error",
      },
    });
  }
  const client = await Client.findById(req.body.client)
  if (!client) {
    return res.status(404).json({
      status: 'fail',
      message: 'Client not found',
    });
  }
  client.accounts.push(newAccount._id);
  
  // Save the updated client document
  await client.save();

  res.status(200).json({
    status: "success",
    data: {
      account: newAccount,
    },
  });
});
exports.getLoan = catchAsync(async(req,res,next)=>{
    const currAccount = await Account.findById(req.params.id).populate('client');
    if (!currAccount) {
        return res.status(404).json({
          status: 'fail',
          message: 'Account not found',
        });
      }
    res.status(200).json({
    status: 'success',
    data: {
      currAccount,
    },
  });
})
exports.getAllLoans = catchAsync(async(req,res,next)=>{
    const accounts = await Account.find()
    if (!accounts) {
        return res.status(404).json({
          status: 'fail',
          message: 'No accounts found',
        });
      }
    res.status(200).json({
    status: 'success',
    data: {
      accounts,
    },
  });
})

exports.removeLoans = catchAsync(async (req, res, next) => {
    const account = await Account.findByIdAndDelete(req.params.id);
    // await Appointment.findAndDelete({
    //   patient: req.params.id,
    // });
    // await Prescription.findAndDelete({
    //   patient: req.params.id,
    // });
  
    if (!account) {
      return next(new AppError('No account found with that ID', 404));
    }
    
  
    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

  
  exports.updateLoan = catchAsync(async (req, res, next) => {
    const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAccount) {
        return res.status(404).json({
            status: 'fail',
            message: 'Account not found',
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            account: updatedAccount,
        },
    });
});
