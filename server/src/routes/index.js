import express from 'express';

import dataRouter from '../components/router';

const router = express.Router();

router.use('/data', dataRouter);

export default router;
