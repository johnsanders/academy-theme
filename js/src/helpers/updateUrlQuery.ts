import qs from 'qs';

const updateUrlQuery = (toAdd: { [key: string]: unknown } | null, toDelete?: string[]): void => {
	const { origin, pathname } = window.location;
	const currentQs = qs.parse(window.location.search, { ignoreQueryPrefix: true });
	if (toDelete) {
		toDelete.forEach((key) => delete currentQs[key]);
	}
	const newQs = { ...currentQs, ...toAdd };
	const newUrl = origin + pathname + qs.stringify(newQs, { addQueryPrefix: true });
	window.history.pushState(null, document.title, newUrl);
};

export default updateUrlQuery;
