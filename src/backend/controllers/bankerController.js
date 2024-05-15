const Client = require("../models/clientModel");
const Banker = require("../models/bankerModel");
const LoanApp = require("../models/loanApplicationModel");
const CCApp = require("../models/creditCardApplicationModel");
const Loan = require("../models/loanModel");
const Card = require("../models/cardModel");
const moment = require('moment');
const {
  default: CreditCardGenerator,
} = require("@mihnea.dev/credit-card-generator");
const catchAsync = require("../utils/catchAsync");

exports.createBanker = catchAsync(async (req, res, next) => {
  const newBanker = await Banker.create(req.body)
    .then((result) => {
      return result; // Forward the result for further processing
    })
    .catch((error) => {
      console.error("Error creating client:", error.message);
      throw error; // Re-throw the error for further handling
    });
  if (newBanker == null) {
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
      banker: newBanker,
    },
  });
});

exports.getBanker = catchAsync(async (req, res, next) => {
  const currBanker = await Banker.findById(req.params.id);
  if (!currBanker) {
    return res.status(404).json({
      status: "fail",
      message: "Banker not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      currBanker,
    },
  });
});
exports.getAllBankers = catchAsync(async (req, res, next) => {
  const bankers = await Banker.find();
  if (!bankers) {
    return res.status(404).json({
      status: "fail",
      message: "No bankers found",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      bankers,
    },
  });
});

exports.removeBanker = catchAsync(async (req, res, next) => {
  const banker = await Banker.findByIdAndDelete(req.params.id);

  if (!banker) {
    return next(new AppError("No banker found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.viewAllRequests = catchAsync(async (req, res, next) => {
  // Execute both queries concurrently
  const [loanRequests, ccRequests] = await Promise.all([
    LoanApp.find(),
    CCApp.find(),
  ]);

  // Check if both queries returned results
  if (loanRequests.length === 0 && ccRequests.length === 0) {
    return res.status(404).json({
      status: "fail",
      message: "No loan requests or credit card requests found",
    });
  }

  // Return both loan requests and credit card requests
  res.status(200).json({
    status: "success",
    data: {
      loans: loanRequests,
      ccs: ccRequests,
    },
  });
});
exports.updateApplication = catchAsync(async (req, res, next) => {
  const applicationId = req.params.applicationId;
  const loanOrCC = req.params.type;
  const newStatus = req.body.status; // Expected body: { status: 'approved' | 'rejected' }

  const application =
    loanOrCC == "loan"
      ? await LoanApp.findByIdAndUpdate(applicationId, {
        status: newStatus,
      })
      : await CCApp.findByIdAndUpdate(applicationId, { status:newStatus });

  if (!application) {
    return res.status(404).json({
      newStatus: "fail",
      data: {
        error: "Application not found",
      },
    });
  }
  if (newStatus == "accepted") {
    if (loanOrCC == "loan") {
      const newLoan = await Loan.create({
        loanPurpose: application.loanPurpose,
        deadline: moment(Date.now())
          .add(application.loanTerm, "months")
          .toDate(),
        loanTerm: application.loanTerm,
        dateIssued: Date.now(),
        dueAmount: application.loanAmount,
        status: "unpaid",
        monthlyIncome: application.income,
        loanedAmount: application.loanAmount, // Example: Use loan amount from application
        baseInterest: req.body.interestRate,
        client: application.client,
      });
      const client = await Client.findById(application.client)
  if (!client) {
    return res.status(404).json({
      status: 'fail',
      message: 'Client not found',
    });
  }
  client.loans.push(newLoan._id);
  
  // Save the updated client document
  await client.save();

    } else {
     
      let cardNumber;
      const carder = new CreditCardGenerator()
      const existingCard = await Card.findOne({ cardNumber });
      // Generate a unique card number
      var card = null;
      do {
        // Generate credit card information
         card = carder.generate_one()
        cardNumber = card.number;

        // Check if the card number already exists in the database
        const existingCard = await Card.findOne({ cardNumber });

        // If the card number exists, generate a new one
      } while (existingCard);
      const expiryDate = new Date(`20${card.expiry.year}`, card.expiry.month - 1);
      const newCard = await Card.create({
        cardNumber: cardNumber,
        cvv: card.cvv2,
        name: application.firstName + " " + application.lastName,
        expiryDate: expiryDate,
        type: "credit",
        account: application.account,
      });
      const client = await Client.findById(application.client)
      if (!client) {
        return res.status(404).json({
          status: 'fail',
          message: 'Client not found',
        });
      }
      client.cards.push(newCard._id);
      await client.save();
    }
  }

  res.status(200).json({
    status: "success",
    data: {
      message: `Application status updated to ${newStatus}`,
      application,
    },
  });
});
exports.viewApplication = catchAsync(async (req, res, next) => {
  const applicationId = req.params.applicationId;
  const loanOrCC = req.params.type;

  const application =
    loanOrCC == "loan"
      ? await LoanApp.findById(applicationId)
      : await CCApp.findById(applicationId);

  if (!application) {
    return res.status(404).json({
      status: "fail",
      data: {
        error: "Application not found",
      },
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      application,
    },
  });
});
