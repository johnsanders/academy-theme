import { CarouselItem, RowItem } from '../../types';
import { v4 as uuid } from 'uuid';

export const createBlankGridItem = (): RowItem => ({
	dateEnd: null,
	dateStart: null,
	duration: '',
	id: uuid(),
	instructors: [],
	modId: '',
	modName: '',
	name: '',
	tags: [],
	thumbUrl: '',
	url: '',
});

export const createBlankCarouselItem = (): CarouselItem => ({
	id: uuid(),
	targetUrl: '',
	url: '',
});
