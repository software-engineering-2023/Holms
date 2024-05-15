const express = require('express');
const accountController = require('../controllers/accountController');


const router = express.Router({
    mergeParams: true,
  });

router
  .route('/')
  .get(accountController.getAllAccounts)
  .post(accountController.openAccount);
router
  .route('/:id')
  .get(accountController.getAccount)
  .delete(accountController.removeAccount)
  .post(accountController.updateAccount)

 
  module.exports = router;