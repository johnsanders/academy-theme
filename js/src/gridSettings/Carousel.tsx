import { CarouselItem } from '../types';
import CarouselItems from './CarouselItems';
import { DropResult } from 'react-beautiful-dnd';
import EditCarouselItemContainer from './edit/EditCarouselItemContainer';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faPlusCircle } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	activeItem: CarouselItem | null;
	carouselItems: CarouselItem[];
	handleAddItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleCancelEdit: () => void;
	handleDeleteItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDragEnd: (result: DropResult) => void;
	handleEditItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleSave: (carouselItem: CarouselItem) => void;
}

const Carousel: React.FC<Props> = (props: Props): JSX.Element =>
	props.activeItem ? (
		<EditCarouselItemContainer
			activeItem={props.activeItem}
			cancelEdit={props.handleCancelEdit}
			handleSave={props.handleSave}
		/>
	) : (
		<div className="mt-3">
			<button className="btn btn-secondary mb-3" onClick={props.handleAddItemClick}>
				<Icon className="mr-1" icon={faPlusCircle} />
				Add a Carousel Item
			</button>
			<CarouselItems
				carouselItems={props.carouselItems}
				handleDeleteItemClick={props.handleDeleteItemClick}
				handleDragEnd={props.handleDragEnd}
				handleEditItemClick={props.handleEditItemClick}
			/>
		</div>
	);

export default Carousel;
