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
export interface ModInfo {
	name: string;
}
export interface Module {
	id: string;
	modname: string;
	name: string;
}
export interface MoodleAcademyFront {
	carouselItems: CarouselItem[];
	drawer: { init: () => void };
	getStrings: MoodleJs['util']['get_strings'];
	instructors: Instructor[];
	modsInfo: { [key: string]: ModInfo };
	navbarConfig: NavbarConfig;
	rows: Row[];
	tags: Tag[];
	templateType: string;
}
export interface MoodleAcademySettings extends MoodleAcademyFront {
	avatarUrls: string[];
	carouselUrls: string[];
	courses: Course[];
	settingsInputId: string;
	thumbUrls: string[];
}
export interface MoodleJs {
	cfg: { wwwroot: string };
	util: {
		get_string: (key: string, component: string) => string;
		get_strings: (strings: { component: string; key: string }[]) => Promise<string[]>;
	};
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
	showNavToggle: boolean;
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
	dateDisplayed: number | null;
	dateEnd: number | null;
	dateStart: number | null;
	duration: string;
	id: string;
	instructors: string[];
	manualName: string;
	modId: string;
	modName: string;
	tags: string[];
	thumbUrl: string;
	url: string;
}
export interface Tag {
	color: string;
	id: string;
	name: string;
	thumbUrl: string;
}
