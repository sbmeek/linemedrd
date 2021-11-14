import asyncComponent from './modules/AsyncComponent';

const routes = {
	home: {
		path: '/',
		component: asyncComponent(() => import('pages/home/Home')),
		requiresAuth: false
	},
	login: {
		path: '/Login',
		component: asyncComponent(() => import('pages/login/Login')),
		requiresAuth: false
	},
	signup: {
		path: '/Signup',
		component: asyncComponent(() => import('pages/signup/Signup')),
		requiresAuth: false
	},
	searchDr: {
		path: '/SearchDoctor',
		component: asyncComponent(() => import('pages/searchDr/searchDr')),
		requiresAuth: false,
		requireAnonimoUser: true
	},
	homeUser: {
		path: '/Home',
		component: asyncComponent(() => import('pages/home/Home')),
		requiresAuth: true,
		requireAnonimoUser: true
	}
};

export default routes;
