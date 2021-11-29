import React from 'react';
import './style.css';
import { TParagraph } from './type';

type Props = {
	data: TParagraph;
};

const Paragraph: React.FC<Props> = ({ data }) => {
	return <p>{data}</p>;
};
export default Paragraph;
