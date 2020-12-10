declare const cnnAcademy: MoodleAcademy;
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import ImagesModal from '../ImagesModal';
import { MoodleAcademy } from '../../types';
import React from 'react';
import { faImage } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	onFocus: () => void;
	thumbUrl: string;
	updateThumb: (url: string) => void;
}

const EditItemThumbnail: React.FC<Props> = (props: Props): JSX.Element => {
	const [thumbsModalIsOpen, setThumbsModalIsOpen] = React.useState(false);
	const handleOpenThumbsModal = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setThumbsModalIsOpen(true);
	};
	return (
		<>
			<div className="form-group">
				<h3>Thumbnail</h3>
				{props.thumbUrl === '' ? (
					<div className="text-muted">No thumbnail selected.</div>
				) : (
					<img className="d-block" src={props.thumbUrl} style={{ height: '50px' }} />
				)}
				<button
					className="btn btn-secondary mt-2 d-block"
					onClick={handleOpenThumbsModal}
					onFocus={props.onFocus}
				>
					<Icon className="mr-1" icon={faImage} />
					Select Thumbnail
				</button>
			</div>
			{thumbsModalIsOpen && (
				<ImagesModal
					handleImageClick={props.updateThumb}
					imageUrls={cnnAcademy.thumbUrls}
					setIsOpen={setThumbsModalIsOpen}
				/>
			)}
		</>
	);
};

export default EditItemThumbnail;
