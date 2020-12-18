import { faBan, faSpinner } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
	imgUrl: string;
}

const ImageWithLoader: React.FC<Props> = (props: Props): JSX.Element => {
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);
	const handleImageError = () => {
		setLoading(false);
		setError(true);
	};
	const handleImageLoad = () => setLoading(false);
	return (
		<span className="imgWithLoader">
			<div className={`loaderContainer ${loading || error ? 'd-flex' : 'd-none'}`}>
				<div className="imgLoader">
					<Icon className={loading ? 'fa-pulse' : ''} icon={error ? faBan : faSpinner} />
				</div>
			</div>
			<img
				className={loading ? 'loading' : ''}
				onError={handleImageError}
				onLoad={handleImageLoad}
				src={props.imgUrl}
			/>
		</span>
	);
};

export default ImageWithLoader;
