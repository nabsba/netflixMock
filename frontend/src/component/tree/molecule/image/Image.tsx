import React, { useState } from 'react';
import getImg from '../../../../asset';
import LoaderImage from '../loader/image/LoaderImage';
import './style.css';
import { TImageAsComponent } from './type';

type Props = {
	data: TImageAsComponent;
};

const ImageAsComponent: React.FC<Props> = ({
	data: { src, alt, category, name, classnames },
}) => {
	// return <img src={src} alt={alt} loading="lazy" />;
	const [imageLoaded, setImageLoaded] = useState(false);
	const classes = classnames
		? imageLoaded
			? `image_on ${classnames}`
			: ' '
		: imageLoaded
		? 'image_on'
		: ' ';
	const imgHTML = (
		<img
			className={classes}
			onLoad={(): void => setImageLoaded(true)}
			loading="lazy"
			src={category && name ? getImg(category, name) : src}
			alt={alt}
		/>
	);
	const loaderImage = (
		<div
			className={
				imageLoaded ? 'loader_image loading_transition_off' : 'loader_image'
			}
		>
			<LoaderImage />
		</div>
	);
	return (
		<div id="image-container">
			<div id="sub-image-container-wrapper">
				{(() => (src ? imgHTML : loaderImage))()}
			</div>
		</div>
	);
};
export default ImageAsComponent;
