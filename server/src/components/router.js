import express from 'express';
import { getIds, getMetrics } from './controller';

const router = express.Router();

router.route('/objects').get(getIds);
router.route('/metrics').get(getMetrics);

export default router;