/* eslint-disable sort-keys */
export default {
	navbarConfig: {
		ariaLabel: 'Site navigation',
		customMenu: '',
		isLoggedIn: true,
		menuButtonName: 'Side panel',
		navDrawerOpen: true,
		navbarPluginOutput:
			'<div class="popover-region collapsed popover-region-notifications"\n    id="nav-notification-popover-container" data-userid="2"\n    data-region="popover-region">\n    <div class="popover-region-toggle nav-link"\n        data-region="popover-region-toggle"\n        role="button"\n        aria-controls="popover-region-container-5fd07bad37aea5fd07bad37aec1"\n        aria-haspopup="true"\n        aria-label="Show notification window with no new notifications"\n        tabindex="0">\n                <i class="icon fa fa-bell fa-fw "  title="Toggle notifications menu" aria-label="Toggle notifications menu"></i>\n        <div class="count-container hidden" data-region="count-container"\n        aria-label="There are 0 unread notifications">0</div>\n\n    </div>\n    <div \n        id="popover-region-container-5fd07bad37aea5fd07bad37aec1"\n        class="popover-region-container"\n        data-region="popover-region-container"\n        aria-expanded="false"\n        aria-hidden="true"\n        aria-label="Notification window"\n        role="region">\n        <div class="popover-region-header-container">\n            <h3 class="popover-region-header-text" data-region="popover-region-header-text">Notifications</h3>\n            <div class="popover-region-header-actions" data-region="popover-region-header-actions">        <a class="mark-all-read-button"\n           href="#"\n           title="Mark all as read"\n           data-action="mark-all-read"\n           role="button"\n           aria-label="Mark all as read">\n            <span class="normal-icon"><i class="icon fa fa-check fa-fw " aria-hidden="true"  ></i></span>\n            <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" aria-label="Loading"></i></span>\n        </a>\n        <a href="http://localhost:8888/moodle/message/notificationpreferences.php?userid=2"\n           title="Notification preferences"\n           aria-label="Notification preferences">\n            <i class="icon fa fa-cog fa-fw " aria-hidden="true"  ></i>\n        </a>\n</div>\n        </div>\n        <div class="popover-region-content-container" data-region="popover-region-content-container">\n            <div class="popover-region-content" data-region="popover-region-content">\n                        <div class="all-notifications"\n            data-region="all-notifications"\n            role="log"\n            aria-busy="false"\n            aria-atomic="false"\n            aria-relevant="additions"></div>\n        <div class="empty-message" tabindex="0" data-region="empty-message">You have no notifications</div>\n\n            </div>\n            <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" aria-label="Loading"></i></span>\n        </div>\n                <a class="see-all-link"\n                    href="http://localhost:8888/moodle/message/output/popup/notifications.php">\n                    <div class="popover-region-footer-container">\n                        <div class="popover-region-seeall-text">See all</div>\n                    </div>\n                </a>\n    </div>\n</div>',
		pageHeadingMenu: null,
		siteName: 'CNN Academy',
		userMenu:
			'<div class="usermenu"><div class="action-menu moodle-actionmenu nowrap-items d-inline" id="action-menu-1" data-enhance="moodle-core-actionmenu">\n\n        <div class="menubar d-flex " id="action-menu-1-menubar" role="menubar">\n\n            \n\n\n                <div class="action-menu-trigger">\n                    <div class="dropdown">\n                        <a href="#" tabindex="0" class="d-inline-block  dropdown-toggle icon-no-margin" id="action-menu-toggle-1" aria-label="User menu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="action-menu-1-menu">\n                            \n                            <span class="usertext mr-1">John Sanders</span>\n                                \n                            <b class="caret"></b>\n                        </a>\n                            <div class="dropdown-menu dropdown-menu-right menu  align-tr-br" id="action-menu-1-menu" data-rel="menu-content" aria-labelledby="action-menu-toggle-1" role="menu" data-align="tr-br">\n                                                                <a href="http://localhost:8888/moodle/my/" class="dropdown-item menu-action" role="menuitem" data-title="mymoodle,admin" aria-labelledby="actionmenuaction-1">\n                                <i class="icon fa fa-tachometer fa-fw " aria-hidden="true"  ></i>\n                                <span class="menu-action-text" id="actionmenuaction-1">Dashboard</span>\n                        </a>\n                                                                <a href="http://localhost:8888/moodle/user/preferences.php" class="dropdown-item menu-action" role="menuitem" data-title="preferences,moodle" aria-labelledby="actionmenuaction-2">\n                                <i class="icon fa fa-wrench fa-fw " aria-hidden="true"  ></i>\n                                <span class="menu-action-text" id="actionmenuaction-2">Preferences</span>\n                        </a>\n                                                                <a href="http://localhost:8888/moodle/login/logout.php?sesskey=3kv4pvj9Z9" class="dropdown-item menu-action" role="menuitem" data-title="logout,moodle" aria-labelledby="actionmenuaction-3">\n                                <i class="icon fa fa-sign-out fa-fw " aria-hidden="true"  ></i>\n                                <span class="menu-action-text" id="actionmenuaction-3">Log out</span>\n                        </a>\n                                                                <a href="http://localhost:8888/moodle/course/switchrole.php?id=1&amp;switchrole=-1&amp;returnurl=%2F" class="dropdown-item menu-action" role="menuitem" data-title="switchroleto,moodle" aria-labelledby="actionmenuaction-4">\n                                <i class="icon fa fa-user-secret fa-fw " aria-hidden="true"  ></i>\n                                <span class="menu-action-text" id="actionmenuaction-4">Switch role to...</span>\n                        </a>\n                            </div>\n                    </div>\n                </div>\n\n        </div>\n\n</div></div>',
	},
	courses: [
		{ id: '1', fullname: 'CNN Academy', modules: [] },
		{
			id: '3',
			fullname: 'test course',
			modules: [
				{ id: '500', modname: 'resource', module: '18', name: 'Small files' },
				{ id: '502', modname: 'forum', module: '9', name: 'Forum' },
				{ id: '498', modname: 'assign', module: '1', name: 'Assignment 1' },
				{ id: '499', modname: 'page', module: '16', name: 'Page 1' },
				{ id: '501', modname: 'resource', module: '18', name: 'Big file 0' },
				{ id: '513', modname: 'page', module: '16', name: 'Live Learn-in' },
				{ id: '515', modname: 'scorm', module: '19', name: 'test' },
			],
		},
		{
			id: '4',
			fullname: 'Test course: XS',
			modules: [
				{ id: '505', modname: 'resource', module: '18', name: 'Small files' },
				{ id: '507', modname: 'forum', module: '9', name: 'Forum' },
				{ id: '503', modname: 'assign', module: '1', name: 'Assignment 1' },
				{ id: '504', modname: 'page', module: '16', name: 'Page 1' },
				{ id: '506', modname: 'resource', module: '18', name: 'Big file 0' },
			],
		},
		{
			id: '5',
			fullname: 'Test course: XS',
			modules: [
				{ id: '510', modname: 'resource', module: '18', name: 'Small files' },
				{ id: '512', modname: 'forum', module: '9', name: 'Forum' },
				{ id: '508', modname: 'assign', module: '1', name: 'Assignment 1' },
				{ id: '509', modname: 'page', module: '16', name: 'Page 1' },
				{ id: '511', modname: 'resource', module: '18', name: 'Big file 0' },
				{ id: '514', modname: 'scorm', module: '19', name: 'test scorm' },
			],
		},
	],
	rows: [
		{
			id: '1',
			name: 'Abu Dhabi Academy',
			items: [
				{
					id: '4bd8bcac-dc27-4824-8fc3-12f05fd6fc5d',
					instructors: [
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/20.jpg',
							bioUrl: 'https://cnn.com',
							id: '96da4c35-8fdf-43d5-961e-a9643133ac2a',
							name: 'Random Person',
							role: 'Instructor',
						},
					],
					modId: '500',
					modName: 'resource',
					name: 'Small files',
					tags: [
						{ color: '#c80f0f', id: '14d23d10-a1d7-4e07-abc5-bf42e7ef6447', name: 'Breaking News' },
						{ color: '#bc0cd3', id: '044b577d-4279-4b7f-9548-39067e9ac16d', name: 'Leadership' },
					],
					thumbUrl:
						'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/thumbs/0/48-320x180.jpg',
					url: 'http://localhost:8888/moodle/mod/resource/view.php?id=500',
					duration: '1:23',
				},
				{
					duration: '2:23',
					id: '852f0fe9-f860-4eb9-91b5-f7d997261299',
					instructors: [
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/a2awzVm.jpg',
							bioUrl: 'https://cnn.com',
							id: 'c21fd14f-2225-454b-8e19-62bdfcb6cdb5',
							name: 'Just Anybody',
							role: 'Speaker',
						},
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/d5f5cc2a8835.jpeg',
							bioUrl: 'https://cnn.com',
							id: '73c1df7d-bcaf-4c47-ac18-aece13b3f69c',
							name: 'Sombody Who',
							role: 'Instructor',
						},
					],
					modId: '502',
					modName: 'forum',
					name: 'Forum',
					tags: [
						{ color: '#bc0cd3', id: '044b577d-4279-4b7f-9548-39067e9ac16d', name: 'Leadership' },
					],
					thumbUrl:
						'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/thumbs/0/120-320x180.jpg',
					url: 'http://localhost:8888/moodle/mod/forum/view.php?id=502',
				},
				{
					duration: '22:20',
					id: 'd2089c13-6447-4c09-8225-5af7b3410319',
					instructors: [
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/20.jpg',
							bioUrl: 'https://cnn.com',
							id: '96da4c35-8fdf-43d5-961e-a9643133ac2a',
							name: 'Random Person',
							role: 'Instructor',
						},
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/l1qF9oeF.jpg',
							bioUrl: 'https://cnn.com',
							id: '3251b99e-bbca-4784-bb90-1d12eb860183',
							name: 'Whois That',
							role: 'Special Guest',
						},
					],
					modId: '506',
					modName: 'resource',
					name: 'Big file 0',
					tags: [
						{ color: '#c80f0f', id: '14d23d10-a1d7-4e07-abc5-bf42e7ef6447', name: 'Breaking News' },
					],
					thumbUrl:
						'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/thumbs/0/108-320x180.jpg',
					url: 'http://localhost:8888/moodle/mod/resource/view.php?id=506',
				},
				{
					duration: '20:00',
					id: 'ea136549-d9ac-4a2f-bc2e-c9d856542eb4',
					instructors: [
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/a2awzVm.jpg',
							bioUrl: 'https://cnn.com',
							id: 'c21fd14f-2225-454b-8e19-62bdfcb6cdb5',
							name: 'Just Anybody',
							role: 'Speaker',
						},
					],
					modId: '498',
					modName: 'assign',
					name: 'Assignment 1',
					tags: [
						{ color: '#c80f0f', id: '14d23d10-a1d7-4e07-abc5-bf42e7ef6447', name: 'Breaking News' },
					],
					thumbUrl:
						'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/thumbs/0/233-320x180.jpg',
					url: 'http://localhost:8888/moodle/mod/assign/view.php?id=498',
				},
			],
			requiredCourses: [],
		},
		{
			id: '2',
			name: 'Upcoming Live Events',
			items: [
				{
					duration: '20:00',
					id: '720f70b0-5f28-482f-9250-65d07092ce3c',
					instructors: [
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/a2awzVm.jpg',
							bioUrl: 'https://cnn.com',
							id: 'c21fd14f-2225-454b-8e19-62bdfcb6cdb5',
							name: 'Just Anybody',
							role: 'Speaker',
						},
					],
					modId: '507',
					modName: 'forum',
					name: 'Forum',
					tags: [
						{ color: '#c80f0f', id: '14d23d10-a1d7-4e07-abc5-bf42e7ef6447', name: 'Breaking News' },
					],
					thumbUrl:
						'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/thumbs/0/270-320x180.jpg',
					url: 'http://localhost:8888/moodle/mod/forum/view.php?id=507',
				},
				{
					duration: '10:00',
					id: '9b9b5614-b1f9-49c3-b431-f3c7c82c6fc9',
					instructors: [
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/d5f5cc2a8835.jpeg',
							bioUrl: 'https://cnn.com',
							id: '73c1df7d-bcaf-4c47-ac18-aece13b3f69c',
							name: 'Sombody Who',
							role: 'Instructor',
						},
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/l1qF9oeF.jpg',
							bioUrl: 'https://cnn.com',
							id: '3251b99e-bbca-4784-bb90-1d12eb860183',
							name: 'Whois That',
							role: 'Special Guest',
						},
					],
					modId: '500',
					modName: 'resource',
					name: 'Small files',
					tags: [],
					thumbUrl:
						'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/thumbs/0/307-320x180.jpg',
					url: 'http://localhost:8888/moodle/mod/resource/view.php?id=500',
				},
				{
					duration: '10:00',
					id: 'adf15a6d-66b6-46d8-8983-c61170871e6d',
					instructors: [
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/20.jpg',
							bioUrl: 'https://cnn.com',
							id: '96da4c35-8fdf-43d5-961e-a9643133ac2a',
							name: 'Random Person',
							role: 'Instructor',
						},
					],
					modId: '510',
					modName: 'resource',
					name: 'Small files',
					tags: [
						{ color: '#bc0cd3', id: '044b577d-4279-4b7f-9548-39067e9ac16d', name: 'Leadership' },
					],
					thumbUrl:
						'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/thumbs/0/416-320x180.jpg',
					url: 'http://localhost:8888/moodle/mod/resource/view.php?id=510',
				},
			],
			requiredCourses: [],
		},
		{
			id: '3',
			name: 'Archived Live Events',
			items: [
				{
					duration: '13:30',
					id: '3953d9f6-46df-4354-a7a2-1f895a6eca19',
					instructors: [
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/a2awzVm.jpg',
							bioUrl: 'https://cnn.com',
							id: 'c21fd14f-2225-454b-8e19-62bdfcb6cdb5',
							name: 'Just Anybody',
							role: 'Speaker',
						},
					],
					modId: '507',
					modName: 'forum',
					name: 'Forum',
					tags: [
						{ color: '#c80f0f', id: '14d23d10-a1d7-4e07-abc5-bf42e7ef6447', name: 'Breaking News' },
					],
					thumbUrl:
						'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/thumbs/0/383-320x180.jpg',
					url: 'http://localhost:8888/moodle/mod/forum/view.php?id=507',
				},
				{
					duration: '',
					id: '06c3435b-d92b-4161-be5b-82bcc581a931',
					instructors: [
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/a2awzVm.jpg',
							bioUrl: 'https://cnn.com',
							id: 'c21fd14f-2225-454b-8e19-62bdfcb6cdb5',
							name: 'Just Anybody',
							role: 'Speaker',
						},
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/d5f5cc2a8835.jpeg',
							bioUrl: 'https://cnn.com',
							id: '73c1df7d-bcaf-4c47-ac18-aece13b3f69c',
							name: 'Sombody Who',
							role: 'Instructor',
						},
					],
					modId: '500',
					modName: 'resource',
					name: 'Small files',
					tags: [],
					thumbUrl:
						'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/thumbs/0/480-320x180.jpg',
					url: 'http://localhost:8888/moodle/mod/resource/view.php?id=500',
				},
			],
			requiredCourses: [],
		},
		{
			id: '4',
			name: 'Political Journalism',
			items: [
				{
					duration: '5:45',
					id: 'ba37bdeb-572a-4355-b027-4e23718a0261',
					instructors: [
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/20.jpg',
							bioUrl: 'https://cnn.com',
							id: '96da4c35-8fdf-43d5-961e-a9643133ac2a',
							name: 'Random Person',
							role: 'Instructor',
						},
					],
					modId: '510',
					modName: 'resource',
					name: 'Small files',
					tags: [
						{ color: '#c80f0f', id: '14d23d10-a1d7-4e07-abc5-bf42e7ef6447', name: 'Breaking News' },
						{ color: '#bc0cd3', id: '044b577d-4279-4b7f-9548-39067e9ac16d', name: 'Leadership' },
					],
					thumbUrl:
						'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/thumbs/0/517-320x180.jpg',
					url: 'http://localhost:8888/moodle/mod/resource/view.php?id=510',
				},
				{
					duration: '20:00',
					id: '5d5c019b-8f1b-498d-a53d-f586030cae8d',
					instructors: [
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/a2awzVm.jpg',
							bioUrl: 'https://cnn.com',
							id: 'c21fd14f-2225-454b-8e19-62bdfcb6cdb5',
							name: 'Just Anybody',
							role: 'Speaker',
						},
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/l1qF9oeF.jpg',
							bioUrl: 'https://cnn.com',
							id: '3251b99e-bbca-4784-bb90-1d12eb860183',
							name: 'Whois That',
							role: 'Special Guest',
						},
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/20.jpg',
							bioUrl: 'https://cnn.com',
							id: '96da4c35-8fdf-43d5-961e-a9643133ac2a',
							name: 'Random Person',
							role: 'Instructor',
						},
					],
					modId: '512',
					modName: 'forum',
					name: 'Forum',
					tags: [
						{ color: '#bc0cd3', id: '044b577d-4279-4b7f-9548-39067e9ac16d', name: 'Leadership' },
					],
					thumbUrl:
						'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/thumbs/0/676-320x180.jpg',
					url: 'http://localhost:8888/moodle/mod/forum/view.php?id=512',
				},
				{
					duration: '2:20',
					id: 'b6fb412d-e2b2-47f8-98e1-91f9dbb40a61',
					instructors: [
						{
							avatarUrl:
								'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/20.jpg',
							bioUrl: 'https://cnn.com',
							id: '96da4c35-8fdf-43d5-961e-a9643133ac2a',
							name: 'Random Person',
							role: 'Instructor',
						},
					],
					modId: '508',
					modName: 'assign',
					name: 'Assignment 1',
					tags: [],
					thumbUrl:
						'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/thumbs/0/85-320x180.jpg',
					url: 'http://localhost:8888/moodle/mod/assign/view.php?id=508',
				},
				{
					duration: '',
					id: 'e08093ac-86d9-42af-862a-ee6436d10973',
					instructors: [],
					modId: '509',
					modName: 'page',
					name: 'Page 1',
					tags: [],
					thumbUrl:
						'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/thumbs/0/1036-320x180.jpg',
					url: 'http://localhost:8888/moodle/mod/page/view.php?id=509',
				},
				{
					duration: '',
					id: '3e274880-3e4f-4216-b1a0-c286a90a0822',
					instructors: [],
					modId: '511',
					modName: 'resource',
					name: 'Big file 0',
					tags: [],
					thumbUrl:
						'http://localhost:8888/moodle/pluginfile.php/556/block_academy_grid/thumbs/0/1036-320x180.jpg',
					url: 'http://localhost:8888/moodle/mod/resource/view.php?id=511',
				},
			],
			requiredCourses: [],
		},
	],
	carousel: [
		{
			id: '4be7d3fa-b2da-4ba5-bc76-aa556fdafc60',
			targetUrl: 'https://cnn.com',
			url:
				'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/carousel/0/242-1280x180.jpg',
		},
		{
			id: 'f7a7790a-6ead-4ac6-8300-753f90dfd7b7',
			targetUrl: 'https://cnn.com',
			url:
				'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/carousel/0/402-1280x180.jpg',
		},
		{
			id: '07b8ca0b-70fb-4fbc-9a33-10dbbda7dac7',
			targetUrl: 'https://cnn.com',
			url:
				'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/carousel/0/640-1280x180.jpg',
		},
	],
	instructors: [
		{
			avatarUrl: 'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/20.jpg',
			bioUrl: 'https://cnn.com',
			id: '96da4c35-8fdf-43d5-961e-a9643133ac2a',
			name: 'Random Person',
			role: 'Instructor',
		},
		{
			avatarUrl:
				'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/a2awzVm.jpg',
			bioUrl: 'https://cnn.com',
			id: 'c21fd14f-2225-454b-8e19-62bdfcb6cdb5',
			name: 'Just Anybody',
			role: 'Speaker',
		},
		{
			avatarUrl:
				'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/d5f5cc2a8835.jpeg',
			bioUrl: 'https://cnn.com',
			id: '73c1df7d-bcaf-4c47-ac18-aece13b3f69c',
			name: 'Sombody Who',
			role: 'Instructor',
		},
		{
			avatarUrl:
				'http://localhost:8888/moodle/pluginfile.php/1/theme_academy/avatars/0/l1qF9oeF.jpg',
			bioUrl: 'https://cnn.com',
			id: '3251b99e-bbca-4784-bb90-1d12eb860183',
			name: 'Whois That',
			role: 'Special Guest',
		},
	],
	tags: [
		{
			color: '#c80f0f',
			id: '14d23d10-a1d7-4e07-abc5-bf42e7ef6447',
			name: 'Breaking News',
		},
		{
			color: '#bc0cd3',
			id: '044b577d-4279-4b7f-9548-39067e9ac16d',
			name: 'Leadership',
		},
	],
	settingsInputId: 'id_s_theme_academy_grid_config',
};
