import React from 'react';
import { Row } from '../../types';

interface Props {
	handleMoveToRow: (itemId: string, rowFromId: string, rowToId: string) => void;
	itemId: string;
	rowId: string;
	rows: Row[];
	setVisible: (visible: boolean) => void;
}

const MoveToRowDropdown: React.FC<Props> = (props: Props) => {
	const handleMoveToRowClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		const rowToId = e.currentTarget.dataset.rowid;
		if (!rowToId) return;
		props.handleMoveToRow(props.itemId, props.rowId, rowToId);
	};
	React.useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			e.preventDefault();
			props.setVisible(false);
		};
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	});
	return (
		<div className="moveToRowDropdown">
			<h5>Move to Row</h5>
			<div className="moveToRowChoices">
				{props.rows.map((row) =>
					row.id === props.rowId ? null : (
						<div
							className="moveToRowChoice"
							data-rowid={row.id}
							key={row.id}
							onClick={handleMoveToRowClick}
							role="button"
						>
							{row.name}
						</div>
					),
				)}
			</div>
		</div>
	);
};

export default MoveToRowDropdown;
