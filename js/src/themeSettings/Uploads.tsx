declare const M: { cfg: { wwwroot: string } };
import { faCog, faUpload } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Uploads: React.FC = (): JSX.Element => (
	<div className="mt-3">
		<div>
			<a
				className="btn btn-secondary mt-3"
				href={`${M.cfg.wwwroot}/theme/academy/grid/upload_grid_image.php`}
			>
				<Icon className="mr-1" icon={faUpload} />
				Upload Grid Thumbnail
			</a>
		</div>
		<div>
			<a
				className="btn btn-secondary mt-3"
				href={`${M.cfg.wwwroot}/theme/academy/grid/upload_carousel_image.php`}
			>
				<Icon className="mr-1" icon={faUpload} />
				Upload Carousel Image
			</a>
		</div>
		<div>
			<a
				className="btn btn-secondary mt-3"
				href={`${M.cfg.wwwroot}/theme/academy/grid/upload_avatar.php`}
			>
				<Icon className="mr-1" icon={faUpload} />
				Upload Instructor Avatar
			</a>
		</div>
		<div>
			<a
				className="btn btn-secondary mt-3"
				href={`${M.cfg.wwwroot}/theme/academy/grid/upload_manager.php`}
			>
				<Icon className="mr-1" icon={faCog} />
				Manage Uploads
			</a>
		</div>
	</div>
);

export default Uploads;
