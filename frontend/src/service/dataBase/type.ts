export type TObjectSql = {
	type: string;
	mode: string;
	object:
		| {
				[key: string]: Record<string, unknown>;
		  }
		| string[];
	condition?: {
		[key: string]: unknown;
		value: unknown;
		pagination?: string | number;
		paginationOrderType?: string;
	};
	ID?: string;
	sql?: string;
};
