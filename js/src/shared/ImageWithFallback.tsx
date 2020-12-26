import React, { SyntheticEvent } from 'react';
import logoDark from '../img/logo_dark.png';

interface Props {
	handleInit?: () => void;
	imgUrl: string;
}

const ImageWithFallback: React.FC<Props> = (props: Props): JSX.Element => {
	const [error, setError] = React.useState(false);
	const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
		e.preventDefault();
		e.stopPropagation();
		setError(true);
		props.handleInit && props.handleInit();
	};
	const handleImageLoad = () => props.handleInit && props.handleInit();
	return error ? (
		<div className="imgFallback">
			<img src={logoDark} />
		</div>
	) : (
		<img onError={handleImageError} onLoad={handleImageLoad} src={props.imgUrl} />
	);
};

export default ImageWithFallback;
