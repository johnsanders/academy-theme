import { Instructor } from '../../types';
import { roles } from './EditInstructorContainer';
import { v4 as uuid } from 'uuid';

const createBlankInstructor = (): Instructor => ({
	avatarUrl: '',
	bioUrl: '',
	id: uuid(),
	name: '',
	role: roles[0],
});

export default createBlankInstructor;
