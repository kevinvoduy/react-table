const express = require('express');
const { getIds, getMetrics } = require('./controller');

const router = express.Router();

// these are the routes for one component
router.route('/ads').get(getIds);
router.route('/ads_metrics').get(getMetrics);

module.exports = router;