export interface CarouselItem {
	id: string;
	targetUrl: string;
	url: string;
}
export interface Config {
	carousel: CarouselItem[];
	instructors: Instructor[];
	rows: Row[];
	tags: Tag[];
}
export interface Course {
	fullname: string;
	id: string;
	modules: Module[];
}
export interface FlatNavItem {
	action: string;
	classes: string[];
	get_indent: number;
	icon: { alt: string; pix: string; component: string; attributes: { [key: string]: any } };
	indent: number;
	is_section: boolean | null;
	isactive: boolean;
	parent: { [key: string]: any };
	text: string;
}
export interface Instructor {
	avatarUrl: string;
	bioUrl: string;
	id: string;
	name: string;
	role: string;
}
export interface Module {
	id: string;
	modname: string;
	name: string;
}
export interface MoodleAcademy {
	avatarUrls: string[];
	carousel: CarouselItem[];
	courses: Course[];
	drawer: { init: () => void };
	navbarConfig: NavbarConfig;
	rows: Row[];
	settingsInputId: string;
	thumbsUrls: string[];
}
export interface MoodleJs {
	cfg: { wwwroot: string };
}
export interface NavbarConfig {
	ariaLabel: string;
	customMenu: string;
	isLoggedIn: boolean;
	logoUrl: string;
	menuButtonName: string;
	navDrawerOpen: boolean;
	navbarPluginOutput: string;
	pageHeadingMenu: string;
	siteName: string;
	userMenu: string;
}
export interface Row {
	id: string;
	name: string;
	items: RowItem[];
	requiredCourses: string[];
}
export interface RowItem {
	duration: string;
	id: string;
	instructors: Instructor[];
	modId: string;
	modName: string;
	name: string;
	tags: Tag[];
	thumbUrl: string;
	url: string;
}
export interface Tag {
	color: string;
	id: string;
	name: string;
}
