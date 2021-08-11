import express from 'express';
import { chartHome, monthlyData, weeklyData } from '../controllers/chartController';

const chartRouter = express.Router();

chartRouter.get('/', chartHome);
chartRouter.post('/weekly', weeklyData);
chartRouter.post('/monthly', monthlyData);

export default chartRouter;
