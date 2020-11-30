import qs from 'qs';

const updateUrl = (query: { [key: string]: unknown }): void => {
	const { origin, pathname } = window.location;
	const newUrl = origin + pathname + qs.stringify(query, { addQueryPrefix: true });
	window.history.pushState(null, document.title, newUrl);
};

export default updateUrl;
