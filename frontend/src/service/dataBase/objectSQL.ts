import { TObjectSql } from './type';

const generateObjectSQL = (
	type: string,
	mode: string,
	condition?: { key: string; value: string | number; pagination?: number },
): TObjectSql => {
	const objectSql = condition
		? {
				object: {},
				type,
				mode,
				condition,
		  }
		: {
				object: {},
				type,
				mode,
		  };
	return objectSql;
};
const SQL = {
	COUNT: (table: string): string => `SELECT COUNT(*) FROM ${table};`,
};

export { generateObjectSQL, SQL };
