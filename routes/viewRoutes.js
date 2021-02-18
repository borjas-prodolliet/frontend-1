const express = require('express');
const viewController = require('../controllers/viewController');

const router = express.Router();

router.get('/', viewController.getOverview);
// el slug sera lo que utilizaremos para obtener el tour
router.get('/tour/:slug', viewController.getTour);

module.exports = router;
