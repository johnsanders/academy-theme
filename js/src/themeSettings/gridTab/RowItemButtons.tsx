import { faClone, faCog, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
	handleCloneItem: (rowId: string, itemId: string) => void;
	handleDeleteItem: (rowId: string, itemId: string) => void;
	handleEditItem: (rowId: string, itemId: string) => void;
	modId: string;
	rowId: string;
}

const RowItemButtons: React.FC<Props> = (props: Props) => {
	const clickHandlers = {
		clone: props.handleCloneItem,
		delete: props.handleDeleteItem,
		edit: props.handleEditItem,
	};
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		const id = e.currentTarget.dataset.id;
		if (!id || !clickHandlers[id]) return;
		clickHandlers[id](props.rowId, props.modId);
	};
	return (
		<div className="gridItemBtns">
			<div className="gridItemBtn">
				<button data-id="clone" data-tip="Clone" onClick={clickHandler}>
					<Icon icon={faClone} />
				</button>
			</div>
			<div className="gridItemBtn">
				<button data-id="edit" data-tip="Edit" onClick={clickHandler}>
					<Icon icon={faCog} />
				</button>
			</div>
			<div className="gridItemBtn">
				<button data-id="delete" data-tip="Delete" onClick={clickHandler}>
					<Icon icon={faTimes} />
				</button>
			</div>
		</div>
	);
};

export default RowItemButtons;
