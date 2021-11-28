import React from 'react';
import { TSpan } from './type';

type TProps = {
	data: TSpan;
};
const Span: React.FC<TProps> = ({ data }) => {
	return <span> {data}</span>;
};

export default Span;
