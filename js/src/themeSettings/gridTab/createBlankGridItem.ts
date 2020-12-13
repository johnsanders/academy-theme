import { RowItem } from '../../types';
import { v4 as uuid } from 'uuid';

const createBlankGridItem = (): RowItem => ({
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

export default createBlankGridItem;
