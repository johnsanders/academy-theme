declare const M: MoodleJs;
declare const cnnAcademy: MoodleAcademy;
import { MoodleAcademy, MoodleJs } from '../types';

const maxAttempts = 30;
const timeout = 500;
const component = 'theme_academy';

const waitFor = (ms: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};

const awaitTranslate = (): Promise<void> => {
	let attempts = 0;
	return new Promise(async (resolve, reject) => {
		do {
			if (typeof cnnAcademy.getStrings === 'function') {
				resolve();
				return;
			} else {
				attempts += 1;
				await waitFor(timeout);
			}
		} while (attempts <= maxAttempts);
		if (cnnAcademy.getStrings === undefined) reject();
	});
};

const injectStrings = (translatedElements: HTMLElement[]) => {
	translatedElements.forEach((el) => {
		const translation = M.util.get_string(el.dataset.translate || '', component);
		if (translation.substring(0, 2) !== '[[') el.innerHTML = translation;
	});
};

const prepTranslation = async (): Promise<void> => {
	await awaitTranslate();
	const translatedElements = Array.from(document.querySelectorAll<HTMLElement>('[data-translate]'));
	const keys = translatedElements.map((el) => ({
		component,
		key: el.dataset.translate as string,
	}));
	cnnAcademy.getStrings(keys).then(() => injectStrings(translatedElements));
};

export default prepTranslation;
