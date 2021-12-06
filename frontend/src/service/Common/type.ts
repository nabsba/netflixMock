type Metadata = {
	key: string;
	value: any;
};
type MetadataObj = {
	[key: string]: Metadata;
};

type TInfosPage = {
	INDICE_TO_TRIGGER_NEW_PAGE: number;
	NUMBER_OF_ITEMS_IN_PAGE: number;
};
export type { MetadataObj, TInfosPage };
