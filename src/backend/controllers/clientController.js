const Client = require("../models/clientModel");
const LoanApp = require("../models/loanApplicationModel"); 
const CCApp = require("../models/creditCardApplicationModel"); 
const catchAsync = require("../utils/catchAsync");

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
exports.getClient = catchAsync(async (req, res, next) => {
  const currClient = await Client.findById(req.params.id);
  if (!currClient) {
    return res.status(404).json({
      status: "fail",
      message: "Client not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      currClient,
    },
  });
});
exports.getAllClients = catchAsync(async (req, res, next) => {
  const clients = await Client.find();
  if (!clients) {
    return res.status(404).json({
      status: "fail",
      message: "No clients found",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      clients,
    },
  });
});

exports.removeClient = catchAsync(async (req, res, next) => {
  const client = await Client.findByIdAndDelete(req.params.id);
  // await Appointment.findAndDelete({
  //   patient: req.params.id,
  // });
  // await Prescription.findAndDelete({
  //   patient: req.params.id,
  // });

  if (!client) {
    return res.status(404).json({
      status: "fail",
      message: "No clients found",
    });
    }

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.updatePoints = catchAsync(async (req, res, next) => {
  const clientId = req.params.clientID;
  console.log(clientId)
  const client = await Client.findById(clientId);
  if (!client) {
    return res.status(404).json({
      status: "fail",
      message: "No clients found",
    });
  }

  await Client.findByIdAndUpdate(client._id, {
    points: req.body.points,
  });

  res.status(200).json({
    status: "success",
  });
});
exports.getAccountsByClient = catchAsync(async (req, res, next) => {
  const client = await Client.findById(req.params.clientID).populate(
    "accounts"
  );
  res.status(200).json({
    status: "success",
    data: {
      accounts: client.accounts,
    },
  });
});
exports.getLoansByClient = catchAsync(async (req, res, next) => {
  const client = await Client.findById(req.params.clientID).populate(
    "loans"
  );
  res.status(200).json({
    status: "success",
    data: {
      loans: client.loans,
    },
  });
});
// Function to apply for any type of loan
const applyForLoan = async (req, res, next, modelName) => {
  const LoanAppModel = modelName === 'LoanApp' ? LoanApp : CCApp;

  try {
    const newApplication = await LoanAppModel.create({
      ...req.body,
      client: req.params.clientID
    });
    res.status(200).json({
      status: "success",
      data: {
        app: newApplication,
      },
    });
  } catch (error) {
    console.error("Error creating application:", error.message);
    res.status(500).json({
      status: "fail",
      data: {
        error: error.message,
      },
    });
  }
};

exports.applyForLoan = catchAsync(async (req, res, next) => {
  await applyForLoan(req, res, next, 'LoanApp');
});

exports.applyForCC = catchAsync(async (req, res, next) => {
  await applyForLoan(req, res, next, 'CCApp');
});
