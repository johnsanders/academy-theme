import { RowItem } from '../types';
import { v4 as uuid } from 'uuid';

const createBlankGridItem = (): RowItem => ({
	dateDisplayed: null,
	dateEnd: null,
	dateStart: null,
	duration: '',
	id: uuid(),
	instructors: [],
	manualName: '',
	manualUrl: '',
	modId: '',
	modName: '',
	tags: [],
	thumbUrl: '',
});

export default createBlankGridItem;
