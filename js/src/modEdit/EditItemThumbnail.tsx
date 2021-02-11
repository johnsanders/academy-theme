import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faImage } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	className?: string;
	thumbUrl: string;
	setIsOpen: (isOpen: boolean) => void;
	thumbUrls: string[];
	updateThumb: (url: string) => void;
}

const EditItemThumbnail: React.FC<Props> = (props: Props): JSX.Element => {
	const handleOpenThumbsModal = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		props.setIsOpen(true);
	};
	return (
		<div className={`card ${props.className || ''}`}>
			<div className="card-header pt-2 pb-0">
				<h4>Thumbnail</h4>
			</div>
			<div className="card-body">
				{props.thumbUrl === '' ? (
					<div className="text-muted">No thumbnail selected.</div>
				) : (
					<img className="d-block" src={props.thumbUrl} style={{ height: '50px' }} />
				)}
				<button className="btn btn-secondary mt-2 d-block" onClick={handleOpenThumbsModal}>
					<Icon className="mr-1" icon={faImage} />
					Select Thumbnail
				</button>
			</div>
		</div>
	);
};

export default EditItemThumbnail;
