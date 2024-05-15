const express = require('express');
const bankerController = require('../controllers/bankerController');


const router = express.Router({
    mergeParams: true,
  });

router
  .route('/')
  .get(bankerController.getAllBankers)
  .post(bankerController.createBanker)
//   .post(bankerController.signup);
router
  .route('/:id')
  .get(bankerController.getBanker)
  .delete(bankerController.removeBanker)
router
  .route('/:bankerID/apps')
  .get(bankerController.viewAllRequests)
 
router
  .route('/:bankerID/:type/:applicationId/')
  .get(bankerController.viewApplication)
  .patch(bankerController.updateApplication) 
  module.exports = router;
