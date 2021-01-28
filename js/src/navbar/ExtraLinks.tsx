import { Link } from './NavbarContainer';
import React from 'react';

interface Props {
	links: Link[];
}

const ExtraLinks: React.FC<Props> = (props: Props) => {
	const [openDropdownIndex, setOpenDropdownIndex] = React.useState<number | null>(null);
	const handleOutsideClick = () => {
		setOpenDropdownIndex(null);
		document.removeEventListener('mousedown', handleOutsideClick);
	};
	const handleDropdownClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		if (e.currentTarget.dataset.index === undefined) return;
		const index = parseInt(e.currentTarget.dataset.index);
		if (index === openDropdownIndex) {
			setOpenDropdownIndex(null);
			document.removeEventListener('mousedown', handleOutsideClick);
		} else if (index !== NaN) {
			setOpenDropdownIndex(index);
			console.log(index);
			document.addEventListener('mousedown', handleOutsideClick);
		}
	};
	return (
		<ul className="nav navbar-nav justify-content-end">
			{props.links.map((link, i) =>
				link.url ? (
					<li className="nav-item" key={i}>
						<a className="nav-link text-light" href={link.url}>
							{link.text}
						</a>
					</li>
				) : !link.links ? null : (
					<li className="nav-item dropdown" key={i}>
						<a
							aria-expanded={openDropdownIndex !== i}
							aria-haspopup="true"
							className="nav-link dropdown-toggle text-light"
							data-index={i}
							href="#"
							id={`dropdown_${i.toString()}`}
							onClick={handleDropdownClick}
						>
							{link.text}
						</a>
						<div
							aria-labelledby={`dropdown_${i.toString()}`}
							className="dropdown-menu"
							style={{ display: openDropdownIndex === i ? 'inherit' : undefined }}
						>
							{link.links.map((nestedLink, i) => (
								<a className="dropdown-item" href={nestedLink.url} key={i}>
									{nestedLink.text}
								</a>
							))}
						</div>
					</li>
				),
			)}
		</ul>
	);
};

export default ExtraLinks;
