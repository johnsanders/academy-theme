const modifyDom = (): void => {
	const formSetting = document.querySelector('.form-setting') as HTMLDivElement;
	if (formSetting) {
		formSetting.classList.remove('col-sm-9');
		formSetting.classList.add('col-sm-12');
	}
	const submitButton = document.querySelector(
		'#adminsettings button[type=submit]',
	) as HTMLButtonElement;
	if (submitButton) submitButton.style.display = 'none';
};
export default modifyDom;
