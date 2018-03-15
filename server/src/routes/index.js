const express = require('express');

const dataRouter = require('../components/router');

const router = express.Router();

router.use('/data', dataRouter);

module.exports = router;
