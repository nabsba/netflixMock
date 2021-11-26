/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response } from 'express';
import Router from 'express';
const router = Router();

router.get('/', (_req: Request, res: Response) => {
  //Encrypte backend and frontend
  res.send('my friend');
});
export { router as home };
