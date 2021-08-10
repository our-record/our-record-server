import express from 'express';
import {
  anniversaryHome,
  editAnniversary,
  removeAnniversary,
  writeAnniversary,
} from '../controllers/anniversaryController';

const anniversaryRouter = express.Router();

anniversaryRouter.get('/', anniversaryHome);
anniversaryRouter.post('/write', writeAnniversary);
anniversaryRouter.post('/remove', removeAnniversary);
anniversaryRouter.post('/edit', editAnniversary);

export default anniversaryRouter;
