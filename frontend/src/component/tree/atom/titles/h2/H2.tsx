import React from 'react';
import './style.css';
import { TH2 } from './type';

type Props = TH2;

const H2: React.FC<Props> = ({ title }) => {
	return <h2> {title}</h2>;
};
export default H2;
