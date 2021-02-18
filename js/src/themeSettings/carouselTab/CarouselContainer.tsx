import Carousel from './Carousel';
import { CarouselItem } from '../../types';
import { DropResult } from 'react-beautiful-dnd';
import React from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import createBlankCarouselItem from './createBlankCarouselItem';
import disableSaveButtons from '../disableSaveButtons';

interface Props {
	carouselUrls: string[];
	carouselItems: CarouselItem[];
	inputRef: React.MutableRefObject<HTMLInputElement>;
	setCarousel: (carouselItems: CarouselItem[]) => void;
}

const CarouselContainer: React.FC<Props> = (props: Props): JSX.Element => {
	const [activeItem, setActiveItem] = React.useState<CarouselItem | null>(null);
	const handleAddItemClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		const newItem: CarouselItem = createBlankCarouselItem();
		setActiveItem(newItem);
		disableSaveButtons(true);
	};
	const handleEditItemClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		const id = e.currentTarget.dataset.id;
		if (!id) throw new Error('Cannot get item id');
		const itemToEdit = props.carouselItems.find((item) => item.id === id);
		if (!itemToEdit) throw new Error('Cannot get item to edit');
		setActiveItem(itemToEdit);
		disableSaveButtons(true);
	};
	const handleDeleteItemClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		const id = e.currentTarget.dataset.id;
		if (!id) throw new Error('Cannot get item id');
		const newItems = props.carouselItems.filter((item) => item.id !== id);
		props.setCarousel(newItems);
	};
	const handleSave = (itemToSave: CarouselItem): void => {
		const existingItem = props.carouselItems.find((item) => item.id === itemToSave.id);
		const newItems = existingItem
			? props.carouselItems.map((item) => (item.id === itemToSave.id ? itemToSave : item))
			: [...props.carouselItems, itemToSave];
		props.setCarousel(newItems);
		setActiveItem(null);
		disableSaveButtons(false);
	};
	const handleCancelEdit = (): void => {
		setActiveItem(null);
		disableSaveButtons(false);
	};
	const handleDragEnd = (result: DropResult): void => {
		if (!result.destination) throw new Error('Cannot find destination');
		const newItems = arrayMove(props.carouselItems, result.source.index, result.destination.index);
		props.setCarousel(newItems);
	};
	return (
		<Carousel
			activeItem={activeItem}
			carouselItems={props.carouselItems}
			carouselUrls={props.carouselUrls}
			handleAddItemClick={handleAddItemClick}
			handleCancelEdit={handleCancelEdit}
			handleDeleteItemClick={handleDeleteItemClick}
			handleDragEnd={handleDragEnd}
			handleEditItemClick={handleEditItemClick}
			handleSave={handleSave}
		/>
	);
};

export default CarouselContainer;
