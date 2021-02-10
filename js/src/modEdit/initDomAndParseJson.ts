import { RowItem } from '../types';
import { blobPattern } from './updateFormInput';
const jsonPattern = /\* Start data([\s\S]+)\* End data*/;

const initDomAndParseJson = (form: HTMLFormElement): RowItem | null => {
	const containerEl = document.getElementById('fitem_id_name')?.parentNode;
	if (!containerEl) return null;
	const modEditEl = document.createElement('div');
	modEditEl.id = 'modEdit';
	containerEl.appendChild(modEditEl);
	const introEl = form.elements['id_introeditor'];
	const existingBlob = introEl.value.match(blobPattern);
	if (existingBlob) {
		const existingJsonRaw = existingBlob[0].match(jsonPattern);
		if (existingJsonRaw && existingJsonRaw.length > 1) {
			try {
				const existingJson = JSON.parse(existingJsonRaw[1]);
				return existingJson as RowItem;
			} catch (e) {
				console.log(e);
			}
		} else {
		}
	}
	return null;
};

export default initDomAndParseJson;
