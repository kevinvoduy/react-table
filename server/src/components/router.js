import express from 'express';
import { getIds, getMetrics } from './controller';

const router = express.Router();

router.route('/ads').get(getIds);
router.route('/ads_metrics').get(getMetrics);

export default router;