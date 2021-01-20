import { faClone, faCog, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Row } from '../../types';

interface Props {
	handleCloneItem?: (rowId: string, itemId: string) => void;
	handleDeleteItem?: (rowId: string, itemId: string) => void;
	handleEditItem?: (rowId: string, itemId: string) => void;
	handleMoveToRow?: (itemId: string, rowFromId: string, rowToId: string) => void;
	itemId: string;
	modId: string;
	rowId: string;
	rows?: Row[];
}

const RowItemButtons: React.FC<Props> = (props: Props) => {
	ReactTooltip.rebuild();
	const clickHandlers = {
		clone: props.handleCloneItem,
		delete: props.handleDeleteItem,
		edit: props.handleEditItem,
	};
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		ReactTooltip.hide();
		const id = e.currentTarget.dataset.id;
		if (!id || !clickHandlers[id]) return;
		clickHandlers[id](props.rowId, props.modId);
	};
	return (
		<div className="gridItemBtns">
			<div className="gridItemBtn gridItemBtnSm">
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
