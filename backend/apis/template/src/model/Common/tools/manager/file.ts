import path from 'path';
import { promises as fsAsync } from 'fs';
import fs from 'fs';
import { promises as fsPromise } from 'fs';
import { resultTemplate } from '../../../repos/queryDB';
import { Result, TFolderPath } from '../..';

const paths: { [key: string]: string } = {
  ['data.json']: path.join(__dirname, '../../../../../../upload/data/adminDashboard/data.json'),
  ['dataStudentDashboard.json']: path.join(
    __dirname,
    '../../../../../../upload/data/adminDashboard/dataStudentDashboard.json',
  ),
};

const createDirectoryIfNot = async (directory: string): Promise<boolean> => {
  let result = false;
  try {
    const isDirectory = checkIfDirectory(directory);
    if (isDirectory) {
      result = true;
    } else {
      await createDirectory(directory);
      result = true;
    }
  } catch (error) {
    console.log('file: fileSystem.ts, method: createDirectoryIfNot, error: ', error);
  } finally {
    return result;
  }
};
const createDirectory = (directory: string) =>
  fs.promises.mkdir(
    path.join(__dirname + '../../../../../../../upload', directory),
    { recursive: true },
    // (err: any) => {
    //   if (err) {
    //     console.log(err);
    //   }
    // },
  );
const checkIfDirectory = (directory: string): boolean =>
  fs.existsSync(path.join(__dirname + '../../../../../../../upload', directory));

const isDirectoryCreated = async (folderPath: TFolderPath): Promise<boolean> => {
  let result = false;
  try {
    const directory = folderPath.folder;
    const subFolder = folderPath.subFolder ? folderPath.subFolder : null;
    const fullPath = subFolder ? directory + '/' + subFolder : directory + '/';
    result = await createDirectoryIfNot(fullPath);
  } catch (error) {
    console.log('file: fileSystem.ts, method: createDirectoryIfNot, error: ', error);
  } finally {
  }
  return result;
};

const readFileData = async (folderPath: TFolderPath) => {
  const result: Result = { ...resultTemplate };
  try {
    const file = await fsAsync.readFile(paths[folderPath.fileName!], 'utf8');
    if (file && typeof file === 'string') {
      result.state = true;
      result.data = JSON.parse(file);
    }

    return result;
  } catch (error) {
    result.serverError = true;
    result.errorMessage = error;
    console.log(
      'file: ~/Desktop/thenorthwestcollege/backend/apis/tnwc/src/model/service/dashboard, method: readpDataAdmin, error: ',
      error,
    );
    return result;
  }
};

const writeFileData = async (folderPath: TFolderPath, object: any): Promise<Result> => {
  const result: Result = { ...resultTemplate };
  try {
    await fsPromise.writeFile(paths[folderPath.fileName!], JSON.stringify(object), {
      //https://nodejs.org/api/fs.html#fs_file_system_flags
      flag: 'w',
    });
  } catch (error) {
    result.serverError = true;
    result.errorMessage = error;
    console.log(
      'file: ~/Desktop/thenorthwestcollege/backend/apis/tnwc/src/model/service/common/filesystem, method: writeDataAdmin, error: ',
      error,
    );
  } finally {
    return result;
  }
};
export {
  createDirectory,
  checkIfDirectory,
  createDirectoryIfNot,
  isDirectoryCreated,
  readFileData,
  writeFileData,
};
