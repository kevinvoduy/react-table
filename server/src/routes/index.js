const express = require('express');
const dataRouter = require('../components/api-data/router');
const router = express.Router();

// all data routes go through here
router.use('/data', dataRouter);

// new routes can be added like so...
// router.use('/users', userRouter);

module.exports = router;
