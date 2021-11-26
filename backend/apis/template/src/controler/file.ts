import Router from 'express';
import { Request, Response } from 'express';

import path from 'path';
import { Result, TFolderPath, uploadFiles, uploadUnits } from '../model/Common';
import { handleFileManagerReading, handleFileManagerWriting } from '../model/service';

interface MulterRequest extends Request {
  file: any;
}
export type TFolderWriting = {
  type: string;
  object: Record<string, unknown>;
  folderPath: TFolderPath;
};
const router = Router();

router.get('/file/image/:name', async (req: Request, res: Response): Promise<void> => {
  const name = req.params.name;
  res.sendFile(path.join(__dirname + `../../../../../upload/image/${name}`));
});
router.post(
  '/file/image',
  uploadFiles.single('file'),
  async (req: Request, res: Response): Promise<void> => {
    res.send(true);
  },
);
router.post(
  '/file/video',
  uploadFiles.single('file'),
  async (req: Request, res: Response): Promise<void> => {
    res.send(true);
  },
);
router.post('/file/write', async (req: Request, res: Response): Promise<void> => {
  const { type, object, folderPath }: TFolderWriting = req.body;
  const result: Result = await handleFileManagerWriting(type, object, folderPath);
  res.send(result);
});
router.get('/file/read/:type', async (req: Request, res: Response): Promise<void> => {
  const type = req.params.type;
  const result: Result = await handleFileManagerReading(type);

  res.send(result);
});
router.post(
  '/file/:ID/:folder',
  uploadUnits.single('file'),
  async (req: Request, res: Response): Promise<void> => {
    res.send(false);
  },
);
//indication: ID = account_id (sql) account user.
router.get('/file/:ID/:folder/:table/:value', (req: Request, res: Response) => {
  const ID = req.params.ID;
  const folder = req.params.folder;
  const table = req.params.table;
  const value = req.params.value;
  const fileLocation = path.join(
    `${__dirname}/../../../../upload/${ID}/${folder}/${table}/${value}`,
  );
  res.sendFile(fileLocation);
});

export { router as fileManager };
