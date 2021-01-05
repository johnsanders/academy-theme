import { Row, RowItem } from '../../../types';
import { v4 as uuid } from 'uuid';

export const createBlankGridItem = (): RowItem => ({
	dateDisplayed: null,
	dateEnd: null,
	dateStart: null,
	duration: '',
	id: uuid(),
	instructors: [],
	manualName: '',
	modId: '',
	modName: '',
	tags: [],
	thumbUrl: '',
	url: '',
});

export const createBlankGridRow = (): Row => ({
	id: uuid(),
	items: [],
	name: '',
	requiredCourses: [],
});
