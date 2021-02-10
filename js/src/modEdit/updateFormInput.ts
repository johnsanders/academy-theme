import { RowItem } from '../types';

export const blobPattern = /<!-- CNN Academy[\s\S]+?CNN Academy -->/;

const updateFormInput = (form: HTMLFormElement, item: RowItem): void => {
	const introEl = form.elements['id_introeditor'];
	const existingBlob = introEl.value.match(blobPattern);
	const cleanValue = existingBlob ? introEl.value.replace(existingBlob[0], '') : introEl.value;
	const newVal =
		cleanValue +
		`<!-- CNN Academy
* Automatically generated front page data.  Do not delete.
* Start data 
${JSON.stringify(item, null, 1)}		 
* End data
CNN Academy -->
`;
	introEl.value = newVal;
};

export default updateFormInput;
