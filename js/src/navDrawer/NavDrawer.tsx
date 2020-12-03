declare const flatNavigation: FlatNavItem[];
declare const firstCollectionLabel: string;
import { FlatNavItem } from '../types';
import React from 'react';
import { createPortal } from 'react-dom';

const NavDrawer: React.FC = (): JSX.Element | null => {
	const el = document.getElementById('navDrawer') as HTMLDivElement;
	if (!el) return null;
	return createPortal(
		<nav aria-label={firstCollectionLabel} className="list-group">
			<ul>
				{flatNavigation.map((navItem, i) =>
					navItem.action ? (
						<li key={i}>
							<a
								className={`
									list-group-item
									list-group-item-secondary
									list-group-item-action
									${navItem.isactive ? 'active' : ''}
									${navItem.classes.join(' ')}
								`}
								data-collapse="{{collapse}}"
								data-forceopen="{{forceopen}}"
								data-hidden="{{hidden}}"
								data-indent="{{get_indent}}"
								data-isactive="${navItem.isactive.toString()}"
								data-isexpandable="{{isexpandable}}"
								data-key="{{key}}"
								data-nodetype="{{nodetype}}"
								data-parent-key="${navItem?.parent?.key}"
								data-preceedwithhr="{{preceedwithhr}}"
								data-showdivider="{{showdivider}}"
								data-type="{{type}}"
								href={navItem.action}
							>
								<div className={`ml-${navItem.indent === 0 ? 0 : navItem.indent + 2}`}>
									<div className="media">
										{!navItem.icon.pix ? null : (
											<span className="media-left">
												{navItem.icon.pix}
												{navItem.icon.component}
												{navItem.icon.alt}
											</span>
										)}
										<span className={`media-body ${navItem.isactive ? 'font-weight-bold' : ''}`}>
											{navItem.text}
										</span>
									</div>
								</div>
							</a>
						</li>
					) : (
						<li>
							<div
								className={`list-group-item list-group-item-secondary ${navItem.classes.join(
									' ',
								)} data-key="{{key}}" data-isexpandable="{{isexpandable}}" data-indent="{{get_indent}}" data-showdivider="{{showdivider}}" data-type="{{type}}" data-nodetype="{{nodetype}}" data-collapse="{{collapse}}" data-forceopen="{{forceopen}}" data-isactive="{{isactive}}" data-hidden="{{hidden}}" data-preceedwithhr="{{preceedwithhr}}" data-parent-key=${
									navItem?.parent?.key
								}`}
							>
								<div className="ml-{{get_indent}}">
									<div className="media">
										{!navItem.icon.pix ? null : (
											<span className="media-left">
												{navItem.icon.pix}
												{navItem.icon.component}
												{navItem.icon.alt}
											</span>
										)}
										<span className="media-body">{navItem.text}</span>
									</div>
								</div>
							</div>
						</li>
					),
				)}
			</ul>
		</nav>,
		el,
	);
};

export default NavDrawer;
