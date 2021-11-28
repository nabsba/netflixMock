import React from 'react';
import './style.css';
import { TImage } from './type';

type Props = {
	data: TImage;
};

const ImageAsComponent: React.FC<Props> = ({ data: { src, alt } }) => {
	return <img src={src} alt={alt} loading="lazy" />;
};
export default ImageAsComponent;
