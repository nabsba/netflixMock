import React from 'react';
import { Span } from '../../atom';
import { ImageAsComponent } from '../../molecule';

import './style.css';
import { TNavigation } from './type';

type Props = {
	data: TNavigation;
	isOnScroll: boolean;
};

const Navigation: React.FC<Props> = ({
	data: {
		listNavigation,
		navigationNetflixLogo,
		navigationMobileSpan,
		listIcon,
	},
	isOnScroll,
}) => {
	const MenusHTML = listNavigation.map((menu: string) => (
		<li key={menu}>
			<Span data={menu} />
		</li>
	));

	return (
		<div
			className={`navigation flex_row_between_align_center ${
				isOnScroll ? 'navigation_scroll' : ''
			}`}
		>
			<div className="navigation_sub_wrapper_1 flex_row_align_items_center">
				<div className="navigation_href_netflix_wrapper">
					<ImageAsComponent
						data={{
							src: navigationNetflixLogo.src,
							alt: navigationNetflixLogo.alt,
						}}
					/>
				</div>
				<div className="navigation_menus_wrapper">
					<div className="navitation_mobile_tablet flex_row_align_items_center">
						<Span data={navigationMobileSpan} />
						<div className="navigation_menus_icon_wrapper">
							{listIcon.ArrowDown}
						</div>
					</div>
					<ul className="navigation_menus"> {MenusHTML} </ul>
				</div>
			</div>
			<div className="navigation_sub_wrapper_2 flex_row ">
				<span> {listIcon.IconSearch}</span>
				<span> {listIcon.NotificationIcon}</span>
				{listIcon.ProfileIcon}
			</div>
		</div>
	);
};
export default Navigation;
