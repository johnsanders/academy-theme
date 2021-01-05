declare const cnnAcademy: MoodleAcademySettings;
import { MoodleAcademySettings } from '../types';

const updateGlobalObject = (key: string, newValues: { [key: string]: any }): void => {
	cnnAcademy[key] = { ...cnnAcademy[key], ...newValues };
};

export default updateGlobalObject;
