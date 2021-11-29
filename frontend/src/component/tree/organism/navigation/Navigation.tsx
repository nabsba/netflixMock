import React, { useEffect, useState } from 'react';
import getIcon from '../../../factory/icon/Icon';
import { ImageAsComponent, Span } from '../../atom';
import './style.css';
import { TNavigation } from './type';

type Props = {
	data: TNavigation;
};

const Navigation: React.FC<Props> = ({
	data: { listNavigation, isScroll },
}) => {
	const IconSearch = getIcon('Search');
	const ArrowDown = getIcon('ArrowDown');
	const ProfileIcon = getIcon('ProfileIcon');
	const NotificationIcon = getIcon('NotificationIcon');
	const MenusHTML = listNavigation.map((menu: string) => (
		<li key={menu}>
			<Span data={menu} />
		</li>
	));

	return (
		<div
			className={`navigation flex_row_between_align_center ${
				isScroll ? 'navigation_scroll' : ''
			}`}
		>
			<div className="navigation_sub_wrapper_1 flex_row_align_items_center">
				<div className="navigation_href_netflix_wrapper">
					<ImageAsComponent
						data={{
							src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png',
							alt: 'netflix',
						}}
					/>
				</div>
				<div className="navigation_menus_wrapper">
					<div className="navitation_mobile_tablet flex_row_align_items_center">
						<Span data="browser" />
						<div className="navigation_menus_icon_wrapper">{ArrowDown}</div>
					</div>
					<ul className="navigation_menus"> {MenusHTML} </ul>
				</div>
			</div>
			<div className="navigation_sub_wrapper_2 flex_row ">
				<span> {IconSearch}</span>
				<span> {NotificationIcon}</span>
				{ProfileIcon}
			</div>
		</div>
	);
};
export default Navigation;
