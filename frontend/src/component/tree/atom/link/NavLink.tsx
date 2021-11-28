import React from 'react';
import { NavLink } from 'react-router-dom';
import { TNavLink } from './type';
import './style.css';

type TProps = {
	data: TNavLink;
};

const NavLinkAsComponent: React.FC<TProps> = ({ data: { href, text } }) => {
	return <NavLink to={href}>{text}</NavLink>;
};

export default NavLinkAsComponent;
