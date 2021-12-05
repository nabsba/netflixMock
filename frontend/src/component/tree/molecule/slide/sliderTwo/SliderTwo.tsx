/* 
Library: react-slick.neostack.com/docs.
Dependency: yarn add  react-slick  types/react-slick slick-carousel --save
Doc: https://react-slick.neostack.com/
*/
import React from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.min.css';
import './sliderTwo.css';
import { TSliderTwo } from './type';

const getSetting = (
	method: string,
	animation: boolean,
): Record<string, unknown> => {
	const setting: { [key: string]: Record<string, unknown> } = {
		responsive: {
			className: 'center',
			dots: false,
			draggable: true,
			infinite: false,
			centerPadding: '60px',
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 5,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		},
	};
	const autoPlay = { autoplay: true, autoplaySpeed: 2000, pauseOnHover: true };
	const settingChosen = animation
		? Object.assign({}, setting[method], autoPlay)
		: setting[method];

	return settingChosen;
};

type Props = {
	data: TSliderTwo;
};
const SliderTwo: React.FC<Props> = ({ data: { ComponentProps, setting } }) => {
	const settings = getSetting(setting.method, setting.animation);
	return (
		<div id="slider-two">
			<Slider {...settings}>
				{ComponentProps.map((component: React.ReactNode, index: number) => (
					<div key={'slider-two' + index}>{component}</div>
				))}
			</Slider>
		</div>
	);
};

export default SliderTwo;
