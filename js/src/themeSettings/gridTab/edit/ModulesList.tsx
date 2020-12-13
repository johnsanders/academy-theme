import { Course } from '../../../types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { createModuleUrl } from '../GridContainer';
import { faPlus } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	course: Course;
	existingRowModuleIds: string[];
	handleSelectModule: (moduleId: string) => void;
}

const ModulesList: React.FC<Props> = (props: Props): JSX.Element => {
	const handleSelectClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const moduleId = e.currentTarget.dataset.id;
		if (moduleId === undefined) throw new Error('Cannot get module ID');
		props.handleSelectModule(moduleId);
	};
	return props.course.modules.length === 0 ? (
		<div className="text-muted">This course has no modules in it.</div>
	) : (
		<table className="table table-striped table-bordered mb-0">
			<tbody>
				{props.course.modules.map((module) => (
					<tr key={`${module.modname}_${module.id}`}>
						<td>
							<a href={createModuleUrl(module.id, module.modname)}>{module.name}</a>
						</td>
						<td className="capInitial">{module.modname}</td>
						<td className="text-center">
							{props.existingRowModuleIds.includes(module.id) ? (
								<span>Already in Row</span>
							) : (
								<button
									className="btn btn-sm btn-secondary"
									data-id={module.id}
									onClick={handleSelectClick}
								>
									<Icon className="mr-1" icon={faPlus} />
									Add
								</button>
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ModulesList;
