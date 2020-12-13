import { CarouselItem } from '../../types';
import { v4 as uuid } from 'uuid';

const createBlankCarouselItem = (): CarouselItem => ({
	id: uuid(),
	targetUrl: '',
	url: '',
});

export default createBlankCarouselItem;
