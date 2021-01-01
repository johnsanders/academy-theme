import { faCheck, faImage, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import ImagesModal from '../ImagesModal';
import React from 'react';

interface Props {
	clearErrorMessage: () => void;
	color: string;
	errorMessage: string;
	handleCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleDone: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	setThumbUrl: (url: string) => void;
	setThumbsModalIsOpen: (isOpen: boolean) => void;
	thumbUrl: string;
	thumbUrls: string[];
	thumbsModalIsOpen: boolean;
}

const EditTag: React.FC<Props> = (props: Props) => (
	<div className="card my-3">
		<div className="card-header pt-2 pb-0">
			<h4>Edit Tag</h4>
		</div>
		<div className="card-body">
			<div className="form-group">
				<label htmlFor="tagName">Name</label>
				<div className="input-group">
					<input
						className="form-control"
						id="tagName"
						onChange={props.handleNameChange}
						onFocus={props.clearErrorMessage}
						value={props.name}
					/>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="tagColor">Color</label>
				<input
					className="form-control"
					id="tagColor"
					onChange={props.handleColorChange}
					style={{ cursor: 'pointer', display: 'block', height: '3em', padding: '5px 8px' }}
					type="color"
					value={props.color}
				/>
			</div>
			<div className="form-group">
				<label>Thumbnail</label>
				{props.thumbUrl === '' ? (
					<div className="text-muted">No thumbnail selected.</div>
				) : (
					<img className="d-block" src={props.thumbUrl} style={{ height: '50px' }} />
				)}
				<button
					className="btn btn-secondary mt-2 d-block"
					onClick={() => props.setThumbsModalIsOpen(true)}
					onFocus={() => props.clearErrorMessage()}
				>
					<Icon className="mr-1" icon={faImage} />
					Select Thumbnail
				</button>
				{props.thumbsModalIsOpen && (
					<ImagesModal
						handleImageClick={props.setThumbUrl}
						imageUrls={props.thumbUrls}
						setIsOpen={props.setThumbsModalIsOpen}
					/>
				)}
			</div>
			<div>
				<button className="btn btn-secondary mr-1" onClick={props.handleDone}>
					<Icon className="mr-1" icon={faCheck} />
					Done
				</button>
				<button className="btn btn-secondary mr-3" onClick={props.handleCancel}>
					<Icon className="mr-1" icon={faTimes} />
					Cancel
				</button>
				<span className="text-error">{props.errorMessage}</span>
			</div>
		</div>
	</div>
);

export default EditTag;
