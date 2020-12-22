import { Module, RowItem } from '../../../../types';
import React from 'react';
import { v4 as uuid } from 'uuid';

interface Props {
	className?: string;
	updateModule: (module: Module, url?: string) => void;
	onFocus: () => void;
	selectedItem: RowItem;
}

const EditItemModuleManual: React.FC<Props> = (props: Props): JSX.Element => {
	const moduleRef = React.useRef({
		id: uuid(),
		modname: 'manual',
		name: props.selectedItem.name,
	});
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		moduleRef.current.name = e.currentTarget.value;
		props.updateModule(moduleRef.current, props.selectedItem.url);
	};
	const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
		props.updateModule(moduleRef.current, e.currentTarget.value);
	return (
		<>
			<div className="form-group">
				<h5>Name</h5>
				<input
					className="form-control"
					onChange={handleNameChange}
					value={props.selectedItem.name}
				/>
			</div>
			<div className="form-group">
				<h5>URL</h5>
				<input className="form-control" onChange={handleUrlChange} value={props.selectedItem.url} />
			</div>
		</>
	);
};

export default EditItemModuleManual;
