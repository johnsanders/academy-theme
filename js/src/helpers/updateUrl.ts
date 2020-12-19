import qs from 'qs';

const updateUrl = (query: { [key: string]: unknown } | null): void => {
	const { origin, pathname } = window.location;
	if (!query) {
		window.history.pushState(null, document.title, origin + pathname);
	} else {
		const newUrl = origin + pathname + qs.stringify(query, { addQueryPrefix: true });
		window.history.pushState(null, document.title, newUrl);
	}
};

export default updateUrl;
