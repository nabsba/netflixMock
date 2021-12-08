import { THeader } from '../../../../component/tree/template/header/type';
import TArcturus from '../../../../component/tree/template/arcturus/type';
import { TFooter } from '../../../../component/tree/template';
import TErrorBundaryFallbackType from '../../home/type';

type TDataPages = {
	home: {
		header: THeader;
		arcturus: TArcturus;
		footer: TFooter;
		errorBundaryFallbackType: TErrorBundaryFallbackType;
	};
	// otherPage
};

export default TDataPages;
