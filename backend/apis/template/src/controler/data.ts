import Router from 'express';
import { Request, Response } from 'express';
import { handleObject, Result } from '../model/Common';

const router = Router();

router.post('/', async (req: Request, res: Response): Promise<void> => {
  const result: Result = await handleObject(req.body);
  res.send(result);
});

export { router as data };
