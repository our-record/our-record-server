import express from 'express';
import { chartHome, monthlyData } from '../controllers/chartController';

const chartRouter = express.Router();

chartRouter.get('/', chartHome);
chartRouter.post('/monthly', monthlyData);

export default chartRouter;
