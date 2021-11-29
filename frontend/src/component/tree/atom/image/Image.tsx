import React from 'react';
import './style.css';
import { TImageAsComponent } from './type';

type Props = {
	data: TImageAsComponent;
};

const ImageAsComponent: React.FC<Props> = ({ data: { src, alt } }) => {
	return <img src={src} alt={alt} loading="lazy" />;
};
export default ImageAsComponent;
