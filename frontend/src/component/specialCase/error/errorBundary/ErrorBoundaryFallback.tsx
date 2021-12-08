import React from 'react';
import { H1, Paragraph, Span } from '../../../tree/atom';
import { ERROR_BUNDARY } from './data';
import './errorBundaryFallback.css';
import { TErrorBundary } from './type';

type Props = {
	type: string;
};
const ErrorBoundaryFallback: React.FC<Props> = ({ type }: { type: string }) => {
	const data: TErrorBundary = ERROR_BUNDARY[type];
	return (
		<div id="error-bundary">
			<H1 title={data.h1} />
			<Paragraph data={data.paragraph} />
			<Span data={data.span2} />
		</div>
	);
};

export default ErrorBoundaryFallback;
