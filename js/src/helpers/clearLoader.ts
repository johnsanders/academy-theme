const clearLoader = (): void => {
	const loader = document.getElementById('academyLoaderTemplate');
	if (loader) {
		loader.style.transition = 'opacity 0.25s';
		loader.style.opacity = '0';
		setTimeout(() => {
			if (loader.parentNode) loader.parentNode.removeChild(loader);
		}, 250);
	}
};

export default clearLoader;
