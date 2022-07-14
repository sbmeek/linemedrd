import asyncComponent from './modules/async-component';

const routesTopBarDr = {
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
	signup: {
		path: '/Signup',
		component: asyncComponent(() => import('../pages/signup')),
		requiresAuth: false
	},
	homeUser: {
		path: '/Home',
		component: asyncComponent(() => import('pages/home')),
		requiresAuth: true
	},
	signupAuth: {
		path: '/signupTest',
		component: asyncComponent(() => import('../pages/signup')),
		requiresAuth: true
	}
};

export default routesTopBarDr;
