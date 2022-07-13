import asyncComponent from './modules/AsyncComponent';

export type RouteType = {
	path: string;
	component: any;
	requiresAuth: boolean;
	isPublic?: boolean;
};

const routes: { [key: string]: RouteType } = {
	home: {
		path: '/',
		component: asyncComponent(() => import('pages/home/Home')),
		requiresAuth: false
	},
	login: {
		path: '/Login',
		component: asyncComponent(() => import('pages/login/login')),
		requiresAuth: false
	},
	signup: {
		path: '/Signup',
		component: asyncComponent(() => import('pages/signup/signup')),
		requiresAuth: false
	},
	searchDr: {
		path: '/SearchDoctor',
		component: asyncComponent(
			() => import('pages/search-doctor/search-doctor')
		),
		requiresAuth: true,
		isPublic: true
	},
	homeUser: {
		path: '/Home',
		component: asyncComponent(() => import('pages/home/Home')),
		requiresAuth: true,
		isPublic: true
	}
};

export default routes;
