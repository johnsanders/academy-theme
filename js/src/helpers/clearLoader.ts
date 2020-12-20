const clearLoader = (): void => {
	const loader = document.getElementById('academyLoaderTemplate');
	const wrapper = document.getElementById('page-wrapper');
	setTimeout(() => {
		if (loader) loader.classList.add('d-none');
		if (wrapper) wrapper.style.visibility = 'visible';
	}, 250);
};
if (document.readyState !== 'loading') {
	clearLoader();
} else {
	document.addEventListener('DOMContentLoaded', clearLoader);
}

export default clearLoader;
