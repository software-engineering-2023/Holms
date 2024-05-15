const express = require('express');
const clientController = require('../controllers/clientController');


const router = express.Router({
    mergeParams: true,
  });

router
  .route('/')
  .get(clientController.getAllClients)
  .post(clientController.signup);
router
  .route('/:id')
  .get(clientController.getClient)
  .delete(clientController.removeClient)
router
  .route('/:clientID/points')
  .patch(clientController.updatePoints)
 
router
  .route('/:clientID/myAccounts')
  .get(clientController.getAccountsByClient) 
router
  .route('/:clientID/myLoans')
  .get(clientController.getLoansByClient) 
router
  .route('/:clientID/loanApp')
  .post(clientController.applyForLoan) 
router
  .route('/:clientID/ccApp')
  .post(clientController.applyForCC) 
  module.exports = router;