const disableSaveButtons = (disabled: boolean): void => {
	const btns = document.querySelectorAll('button.saveAll');
	btns.forEach((btn) =>
		disabled ? btn.classList.add('disabled') : btn.classList.remove('disabled'),
	);
};

export default disableSaveButtons;
