declare const cnnAcademy: MoodleAcademy;
import { faCheck, faImage, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import ImagesModal from '../ImagesModal';
import { MoodleAcademy } from '../../types';
import React from 'react';

interface Props {
	cancelEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
	clearErrorMessage: () => void;
	errorMessage: string;
	handleImageSelect: (imageUrl: string) => void;
	handleSave: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleTargetUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	openImageModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
	imageModalIsOpen: boolean;
	imageUrl: string;
	setImageModalIsOpen: (isOpen: boolean) => void;
	targetUrl: string;
}

const EditCarouselItem: React.FC<Props> = (props: Props): JSX.Element => (
	<>
		<h2>Coursel Item</h2>
		<h3>Target Link</h3>
		<div className="form-group">
			<label htmlFor="url">Link when item is clicked</label>
			<input
				className="form-control"
				id="url"
				onChange={props.handleTargetUrlChange}
				onFocus={props.clearErrorMessage}
				value={props.targetUrl}
			/>
		</div>
		<div className="form-group">
			<h3>Item Image</h3>
			{props.imageUrl !== '' ? (
				<img className="d-block" src={props.imageUrl} style={{ height: '50px' }} />
			) : (
				<div className="text-muted mb-2">No image selected.</div>
			)}
		</div>
		<div className="form-group">
			<button
				className="btn btn-secondary mt-1"
				onClick={props.openImageModal}
				onFocus={props.clearErrorMessage}
			>
				<Icon className="mr-1" icon={faImage} />
				Select Image
			</button>
		</div>
		<div className="form-group mt-1">
			<button className="btn btn-secondary mr-1" onClick={props.handleSave}>
				<Icon className="mr-1" icon={faCheck} />
				Done
			</button>
			<button className="btn btn-secondary mr-3" onClick={props.cancelEdit}>
				<Icon className="mr-1" icon={faTimes} />
				Cancel
			</button>
			<span className="text-error">{props.errorMessage}</span>
		</div>
		{props.imageModalIsOpen && (
			<ImagesModal
				handleImageClick={props.handleImageSelect}
				imageUrls={cnnAcademy.carouselUrls}
				setIsOpen={props.setImageModalIsOpen}
			/>
		)}
	</>
);

export default EditCarouselItem;
