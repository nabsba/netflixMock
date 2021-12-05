import React from 'react';
import './style.css';
import TH3 from './type';

type Props = {
	title: TH3;
};

const H3: React.FC<Props> = ({ title }) => {
	return <h3>{title}</h3>;
};
export default H3;
