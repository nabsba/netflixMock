import React from 'react';
import './style.css';
import TFooter from './type';

type Props = {
	data: TFooter;
};

const Footer: React.FC<Props> = ({ data: { top, bottom } }) => {
	return <div id="footer">hello footer</div>;
};
export default Footer;
