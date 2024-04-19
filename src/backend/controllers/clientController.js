const Client = require("../models/clientModel");
const catchAsync = require('../utils/catchAsync');


exports.signup = catchAsync(async (req, res, next) => {
  const newClient = await Client.create(req.body)
    .then((result) => {
      return result; // Forward the result for further processing
    })
    .catch((error) => {
      console.error("Error creating client:", error.message);
      throw error; // Re-throw the error for further handling
    });
  if (newClient == null) {
    res.status(404).json({
      status: "fail",
      data: {
        error: "error",
      },
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      client: newClient,
    },
  });
});
exports.getClient = catchAsync(async(req,res,next)=>{
    const currClient = await Client.findById(req.params.id)
    if (!currClient) {
        return res.status(404).json({
          status: 'fail',
          message: 'Client not found',
        });
      }
    res.status(200).json({
    status: 'success',
    data: {
      currClient,
    },
  });
})
exports.getAllClients = catchAsync(async(req,res,next)=>{
    const clients = await Client.find()
    if (!clients) {
        return res.status(404).json({
          status: 'fail',
          message: 'No clients found',
        });
      }
    res.status(200).json({
    status: 'success',
    data: {
      clients,
    },
  });
})

exports.removeClient = catchAsync(async (req, res, next) => {
    const client = await Client.findByIdAndDelete(req.params.id);
    // await Appointment.findAndDelete({
    //   patient: req.params.id,
    // });
    // await Prescription.findAndDelete({
    //   patient: req.params.id,
    // });
  
    if (!client) {
      return next(new AppError('No client found with that ID', 404));
    }
    
  
    res.status(204).json({
      status: 'success',
      data: null,
    });
  });