const clearLoader = (): void => {
	const loader = document.getElementById('academyLoaderTemplate');
	const moodlePage = document.getElementById('page');
	if (loader) {
		loader.style.transition = 'opacity 0.25s';
		loader.style.opacity = '0';
		setTimeout(() => {
			if (loader.parentNode) loader.parentNode.removeChild(loader);
		}, 250);
	}
	if (moodlePage) moodlePage.classList.remove('d-none');
};

export default clearLoader;
