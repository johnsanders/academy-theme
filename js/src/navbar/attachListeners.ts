const createHandleDropdownClick = (dropdown: HTMLDivElement) => {
	return (e: MouseEvent): void => {
		e.preventDefault();
		dropdown.classList.toggle('show');
	};
};

const attachListeners = (
	largeNavbarEl: HTMLElement | undefined,
	smallNavbarEl: HTMLElement | undefined,
): void => {
	if (!largeNavbarEl || !smallNavbarEl) {
		console.error('Toggle ref is undefined');
		return;
	}
	const largeToggle = largeNavbarEl.querySelector<HTMLAnchorElement>('.dropdown-toggle');
	const largeDropdown = largeNavbarEl.querySelector<HTMLDivElement>('.dropdown-menu');
	const smallToggle = smallNavbarEl.querySelector<HTMLAnchorElement>('.dropdown-toggle');
	const smallDropdown = smallNavbarEl.querySelector<HTMLDivElement>('.dropdown-menu');
	if (!largeToggle || !largeDropdown || !smallToggle || !smallDropdown) {
		console.error('Cannot find dropdowns or toggles');
		return;
	}
	const largeCallback = createHandleDropdownClick(largeDropdown);
	const smallCallback = createHandleDropdownClick(smallDropdown);
	largeToggle.addEventListener('click', largeCallback);
	smallToggle.addEventListener('click', smallCallback);
};

export default attachListeners;
