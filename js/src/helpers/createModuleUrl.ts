import { MoodleJs } from '../types';
declare const M: MoodleJs;
const createModuleUrl = (id: string, modname: string): string =>
	`${M.cfg.wwwroot}/mod/${modname}/view.php?id=${id}`;

export default createModuleUrl;
