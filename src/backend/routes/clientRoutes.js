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
 
  module.exports = router;