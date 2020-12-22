import { Module, RowItem } from '../../../../types';
import EditItemModuleManual from './EditItemModuleManual';
import EditItemModuleSelectorContainer from './EditItemModuleSelectorContainer';
import React from 'react';

interface Props {
	className?: string;
	itemsAlreadyInRow: RowItem[];
	onFocus: () => void;
	selectedItem: RowItem;
	updateModule: (module: Module, url?: string) => void;
}

const ModuleSelector: React.FC<Props> = (props: Props): JSX.Element => {
	const [isManual, setIsManual] = React.useState(props.selectedItem.modName === 'manual');
	return (
		<div className={`card ${props.className || ''}`}>
			<div className="card-header d-flex justify-content-between">
				<h4 className="mb-0">{isManual ? 'Manual Module' : 'Course Module'}</h4>
				<div className="btn-group">
					<button
						className={`btn btn-secondary btn-sm ${isManual ? '' : 'active'}`}
						onClick={() => setIsManual(false)}
					>
						Course Module
					</button>
					<button
						className={`btn btn-secondary btn-sm ${isManual ? 'active' : ''}`}
						onClick={() => setIsManual(true)}
					>
						Manual
					</button>
				</div>
			</div>
			<div className="card-body">
				{isManual ? (
					<EditItemModuleManual
						className={props.className}
						onFocus={props.onFocus}
						selectedItem={props.selectedItem}
						updateModule={props.updateModule}
					/>
				) : (
					<EditItemModuleSelectorContainer
						className={props.className}
						itemsAlreadyInRow={props.itemsAlreadyInRow}
						onFocus={props.onFocus}
						selectedItemName={props.selectedItem.name}
						updateModule={props.updateModule}
					/>
				)}
			</div>
		</div>
	);
};

export default ModuleSelector;
