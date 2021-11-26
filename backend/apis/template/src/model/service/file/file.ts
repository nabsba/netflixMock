import { readFileData, Result, TFolderPath } from '../../Common';
import { resultTemplate } from '../../repos';

const handleFileManagerWriting = async (
  type: string,
  object: Record<string, unknown>,
  folderPath: TFolderPath,
) => {
  let result: Result = { ...resultTemplate };
  switch (type) {
    case 'admin':
    // result = await updateDataAdmin(object, folderPath);
    // return result;
    default:
      return result;
  }
};

const handleFileManagerReading = async (type: string, folderPath?: TFolderPath) => {
  let result: Result = { ...resultTemplate };
  try {
    switch (type) {
      case 'data':
      // const folderPATH = folderPath ? folderPath : DASHBOARD_ADMIN_FOLDER_STRUCTURE.dataPage;
      // result = await readFileDataSystem(folderPATH);
      // break;
      default:
        return result;
    }
  } catch (error) {
    console.log(error);
  } finally {
    return result;
  }
};

export { handleFileManagerWriting, handleFileManagerReading };
