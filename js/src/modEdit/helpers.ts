import { RowItem } from '../types';

export const initDom = (): void => {
	const containerEl = document.getElementById('fitem_id_name')?.parentNode;
	if (!containerEl) return;
	const modEditEl = document.createElement('div');
	modEditEl.id = 'modEdit';
	containerEl.appendChild(modEditEl);
};

interface ExistingSettings {
	existingItem: RowItem | undefined;
	existingItems: RowItem[];
}

export const getExistingSettings = async (): Promise<ExistingSettings | null> => {
	const courseInputEl = document.querySelector('input[name=course]') as HTMLInputElement;
	const courseModuleInputEl = document.querySelector(
		'input[name=coursemodule]',
	) as HTMLInputElement;
	if (!courseInputEl || !courseModuleInputEl) return null;
	const courseId = courseInputEl.value;
	const courseModuleId = courseModuleInputEl.value;
	const formData = new FormData();
	formData.append('courseId', courseId);
	const res = await fetch('/moodle/theme/academy/rest.php', {
		body: formData,
		method: 'POST',
	});
	const academySettingsField = await res.json();
	const existingItems = JSON.parse(academySettingsField.value) as RowItem[];
	const existingItem = existingItems.find((item) => item.modId === courseModuleId);
	return { existingItem, existingItems };
};

export const saveSettings = async (newItem: RowItem, existingItems: RowItem[]): Promise<string> => {
	console.log(newItem, existingItems);
	return '';
};
