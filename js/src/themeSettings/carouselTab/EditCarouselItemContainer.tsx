import { CarouselItem } from '../../types';
import EditCarouselItem from './EditCarouselItem';
import React from 'react';

interface Props {
	activeItem: CarouselItem;
	cancelEdit: () => void;
	carouselUrls: string[];
	handleSave: (item: CarouselItem) => void;
}
const EditCarouselItemContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [errorMessage, setErrorMessage] = React.useState('');
	const [imageModalIsOpen, setImageModalIsOpen] = React.useState(false);
	const [imageUrl, setImageUrl] = React.useState(props.activeItem.url);
	const [targetUrl, setTargetUrl] = React.useState(props.activeItem.targetUrl);
	const openImageModal = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setImageModalIsOpen(true);
	};
	const handleImageSelect = (url: string): void => {
		setImageModalIsOpen(false);
		setImageUrl(url);
	};
	const handleTargetUrlChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setTargetUrl(e.currentTarget.value);
	};
	const handleSave = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (!targetUrl || !imageUrl) {
			setErrorMessage('All fields are required.');
			return;
		}
		props.handleSave({ id: props.activeItem.id, targetUrl, url: imageUrl });
	};
	const handleCancelEdit = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		props.cancelEdit();
	};
	const clearErrorMessage = () => setErrorMessage('');
	return (
		<EditCarouselItem
			cancelEdit={handleCancelEdit}
			carouselUrls={props.carouselUrls}
			clearErrorMessage={clearErrorMessage}
			errorMessage={errorMessage}
			handleImageSelect={handleImageSelect}
			handleSave={handleSave}
			handleTargetUrlChange={handleTargetUrlChange}
			imageModalIsOpen={imageModalIsOpen}
			imageUrl={imageUrl}
			openImageModal={openImageModal}
			setImageModalIsOpen={setImageModalIsOpen}
			targetUrl={targetUrl}
		/>
	);
};

export default EditCarouselItemContainer;
