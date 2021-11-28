import React from 'react';
import './style.css';
import { TH1 } from './type';

type Props = TH1;

const H1: React.FC<Props> = ({ title }) => {
	return <h1> {title}</h1>;
};
export default H1;
