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
