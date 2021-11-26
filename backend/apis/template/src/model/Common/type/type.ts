export type Result = {
  state: boolean;
  data: any;
  serverError: boolean;
  errorMessage: any;
  errorCodeSql: string;
};

export type TFolderPath = {
  folder: string;
  subFolder?: string;
  fileName?: string;
};

export type SQLParameter = TObjectSql;
export type TObjectSql = {
  type: string;
  mode: string;
  object:
    | {
        [key: string]: any;
      }
    | string[];
  condition?: {
    [key: string]: any;
    value: any;
    pagination?: string | number;
    paginationOrderType?: string;
  };
  ID?: string;
  sql?: string;
};
