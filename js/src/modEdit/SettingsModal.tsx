import { Instructor, RowItem } from '../types';
import { faCheck, faTimes } from '@fortawesome/pro-solid-svg-icons';
import EditItemDatesContainer from './dates';
import EditItemDuration from './EditItemDuration';
import EditItemInstructors from './EditItemInstructors';
import EditItemThumbnail from './EditItemThumbnail';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { UpdateDateArgs } from './ModalContainer';

interface Props {
	allInstructors: Instructor[];
	isOpen: boolean;
	item: RowItem;
	handleCloseClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	setIsOpen: (isOpen: boolean) => void;
	thumbUrls: string[];
	updateDate: (args: UpdateDateArgs) => void;
	updateDuration: (duration: string) => void;
	updateInstructors: (instructors: string[]) => void;
	updateThumb: (thumbUrl: string) => void;
}

const SettingsModal: React.FC<Props> = (props: Props): JSX.Element | null => (
	<div
		className={`modal ${props.isOpen ? 'show' : ''}`}
		role="dialog"
		style={{
			backgroundColor: '#00000088',
			zIndex: 11000,
		}}
	>
		<div className="modal-dialog modal-lg" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title">Module Front Page Settings</h5>
					<button
						aria-label="Close"
						className="btn btn-light"
						onClick={props.handleCloseClick}
						type="button"
					>
						<Icon icon={faTimes} />
					</button>
				</div>
				<div className="modal-body">
					<EditItemDatesContainer
						className="mb-3"
						displayed={props.item.dateDisplayed}
						end={props.item.dateEnd}
						start={props.item.dateStart}
						updateDate={props.updateDate}
					/>
					<EditItemInstructors
						allInstructors={props.allInstructors}
						className="mb-3"
						instructors={props.item.instructors}
						updateInstructors={props.updateInstructors}
					/>
					<EditItemDuration
						className="mb-3"
						duration={props.item.duration}
						updateDuration={props.updateDuration}
					/>
					<EditItemThumbnail
						className="mb-3"
						setIsOpen={props.setIsOpen}
						thumbUrl={props.item.thumbUrl}
						thumbUrls={props.thumbUrls}
						updateThumb={props.updateThumb}
					/>
					<button className="btn btn-secondary mr-1" onClick={props.handleCloseClick}>
						<Icon className="mr-1" icon={faCheck} />
						Done
					</button>
				</div>
			</div>
		</div>
	</div>
);

export default SettingsModal;
