import {
	faChevronDown,
	faChevronUp,
	faPencil,
	faPlus,
	faTrash,
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
	/* eslint-disable-next-line @typescript-eslint/ban-types */
	dragListeners?: Record<string, Function>;
	handleAddItemClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDeleteClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleEditClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleMoveClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	isFirst: boolean;
	isLast: boolean;
	rowId: string;
}

const RowButtons: React.FC<Props> = (props: Props) => (
	<span>
		<button
			className="btn btn-secondary btn-sm mr-2 mb-1"
			data-id={props.rowId}
			onClick={props.handleAddItemClick}
		>
			<Icon className="mr-1" icon={faPlus} />
			Add Item
		</button>
		<button
			className="btn btn-secondary btn-sm mr-2 mb-1"
			data-id={props.rowId}
			onClick={props.handleEditClick}
		>
			<Icon className="mr-1" icon={faPencil} />
			Edit Row
		</button>
		<button
			className="btn btn-secondary btn-sm mr-2 mb-1"
			data-id={props.rowId}
			onClick={props.handleDeleteClick}
		>
			<Icon className="mr-1" icon={faTrash} />
			Delete Row
		</button>
		{props.isFirst ? null : (
			<button
				className="rowDragHandle d-inline-block bg-secondary btn-sm mr-2 mb-1"
				data-direction="up"
				onClick={props.handleMoveClick}
			>
				<Icon className="mr-1" icon={faChevronUp} />
			</button>
		)}
		{props.isLast ? null : (
			<button
				className="rowDragHandle d-inline-block bg-secondary btn-sm mb-1"
				data-direction="down"
				onClick={props.handleMoveClick}
			>
				<Icon className="mr-1" icon={faChevronDown} />
			</button>
		)}
	</span>
);

export default RowButtons;
