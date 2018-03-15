import express from 'express';

import { idRouter, metricsRouter } from '../components/controller.js';

const router = express.Router();

router.use('/ids', idRouter);
router.use('/metrics', metricsRouter);

export default router;
