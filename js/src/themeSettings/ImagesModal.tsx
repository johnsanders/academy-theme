import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	handleImageClick: (thumbUrl: string) => void;
	imageUrls: string[];
	setIsOpen: (isOpen: boolean) => void;
}

const ImagesModal: React.FC<Props> = (props: Props): JSX.Element => {
	const handleImageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const img = e.currentTarget.querySelector('img');
		if (!img) throw new Error('Cannot find url of selected image');
		props.handleImageClick(img.src);
		props.setIsOpen(false);
	};
	const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		props.setIsOpen(false);
	};
	return (
		<div className="imagesOuterContainer">
			<div className="imagesInnerContainer">
				<div className="card h-100">
					<div className="card-header position-relative">
						<h2 className="text-center">Select an Image</h2>
						<button
							className="btn"
							onClick={handleCloseClick}
							style={{ position: 'absolute', right: '0.5em', top: '0.5em' }}
						>
							<Icon className="fa-2x" icon={faTimes} />
						</button>
					</div>
					<div
						className="card-body d-flex flex-wrap justify-content-center"
						style={{ overflow: 'scroll' }}
					>
						{props.imageUrls.map((imageUrl, i) => (
							<a className="imageContainer" href="#" key={i} onClick={handleImageClick}>
								<img className="image" src={imageUrl} />
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImagesModal;
