import asyncComponent from './modules/async-component';

export type RouteType = {
	path: string;
	component: any;
	requiresAuth: boolean;
	isPublic?: boolean;
};

const routes: { [key: string]: RouteType } = {
	home: {
		path: '/',
		component: asyncComponent(() => import('pages/home')),
		requiresAuth: false
	},
	login: {
		path: '/Login',
		component: asyncComponent(() => import('pages/login')),
		requiresAuth: false
	},
	changePassword: {
		path: '/ChangePassword/:token',
		component: asyncComponent(() => import('pages/change-password')),
		requiresAuth: false
	},
	signup: {
		path: '/Signup',
		component: asyncComponent(() => import('pages/signup')),
		requiresAuth: false
	},
	searchDr: {
		path: '/SearchDoctor',
		component: asyncComponent(() => import('pages/search-doctor')),
		requiresAuth: true,
		isPublic: true
	},
	homeUser: {
		path: '/Home',
		component: asyncComponent(() => import('pages/home')),
		requiresAuth: true,
		isPublic: true
	},
	homeDr: {
		path: '/SearchDoctor/Home',
		component: asyncComponent(() => import('pages/home-doctors')),
		requiresAuth: true,
		isPublic: true
	},
	detailsDr: {
		path: '/SearchDoctor/:id',
		component: asyncComponent(() => import('pages/home')),
		requiresAuth: true,
		isPublic: true
	}
};

export default routes;
