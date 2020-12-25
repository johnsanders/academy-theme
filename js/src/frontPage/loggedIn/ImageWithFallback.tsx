import React from 'react';
import logoDark from '../../img/logo_dark.png';

interface Props {
	handleInit: () => void;
	imgUrl: string;
}

const ImageWithFallback: React.FC<Props> = (props: Props): JSX.Element => {
	const [error, setError] = React.useState(false);
	const handleImageError = () => {
		setError(true);
		props.handleInit();
	};
	const handleImageLoad = () => props.handleInit();
	return error ? (
		<div className="imgFallback">
			<img src={logoDark} />
		</div>
	) : (
		<img onError={handleImageError} onLoad={handleImageLoad} src={props.imgUrl} />
	);
};

export default ImageWithFallback;
