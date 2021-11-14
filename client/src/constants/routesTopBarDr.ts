import asyncComponent from './modules/AsyncComponent';

const routesTopBarDr = {
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
		component: asyncComponent(() => import('../pages/signup/Signup')),
		requiresAuth: false
	},
	homeUser: {
		path: '/Home',
		component: asyncComponent(() => import('pages/home/Home')),
		requiresAuth: true
	},
	signupAuth: {
		path: '/signupTest',
		component: asyncComponent(() => import('../pages/signup/Signup')),
		requiresAuth: true
	}
};

export default routesTopBarDr;
