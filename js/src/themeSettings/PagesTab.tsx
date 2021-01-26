import 'grapesjs/dist/css/grapes.min.css';
import React from 'react';
import grapesjs from 'grapesjs';

const PagesTab: React.FC = (): JSX.Element => {
	const [editorOpen, setEditorOpen] = React.useState(true);
	const handleLaunchEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setEditorOpen(true);
		console.log(e);
	};
	React.useEffect(() => {
		if (editorOpen) {
			console.log(grapesjs);
			setTimeout(() => {
				const editor = grapesjs.init({
					container: '#pageEditor',
					fromElement: true,
					height: '95vh',
					panels: { defaults: [] },
					storageManager: false,
					width: '95vw',
				});
			}, 1000);
		}
	}, [editorOpen]);
	return (
		<>
			<div className="mt-3">
				<div>
					<button className="btn btn-secondary mt-3" onClick={handleLaunchEdit}>
						Front Page
					</button>
				</div>
			</div>
			{!editorOpen ? null : <div id="pageEditor">CNN Academy</div>}
		</>
	);
};

export default PagesTab;
