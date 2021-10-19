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
	homeWithoutHeader: {
		path: '/HomeWithoutHeader',
		component: asyncComponent(() => import('pages/home/Home')),
		requiresAuth: true
	}
};

export default routes;
