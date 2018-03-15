import express from 'express';
import { getIds, getMetrics } from './controller';

const router = express.Router();

router.route('/ids').get(getIds);
router.route('/metrics').get(getMetrics);

export default router;