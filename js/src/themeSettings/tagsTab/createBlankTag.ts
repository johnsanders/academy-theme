import { Tag } from '../../types';
import { v4 as uuid } from 'uuid';

const createBlankTag = (): Tag => ({
	color: '#D0D0D0',
	id: uuid(),
	name: '',
	thumbUrl: '',
});

export default createBlankTag;
