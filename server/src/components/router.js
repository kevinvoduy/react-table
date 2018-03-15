const express = require('express');
const { getIds, getMetrics } = require('./controller');

const router = express.Router();

router.route('/ads').get(getIds);
router.route('/ads_metrics').get(getMetrics);

module.exports = router;