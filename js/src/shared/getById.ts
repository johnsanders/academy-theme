declare const cnnAcademy: MoodleAcademyFront;
import { Instructor, MoodleAcademyFront, Tag } from '../types';

export const getInstructorById = (id: string): Instructor | null =>
	cnnAcademy.instructors.find((instructor) => instructor.id === id) || null;
export const getTagById = (id: string): Tag | null =>
	cnnAcademy.tags.find((tag) => tag.id === id) || null;
