import asyncComponent from './modules/AsyncComponent';

const routes = {
	home: {
		path: '/',
		component: asyncComponent(() => import('@/pages/home/Home'))
	},
	login: {
		path: '/Login',
		component: asyncComponent(() => import('@/pages/login/Login'))
	},
	signup: {
		path: '/Signup',
		component: asyncComponent(() => import('@/pages/signup/Signup'))
	},
	homeWithoutHeader: {
		path: '/HomeWithoutHeader',
		component: asyncComponent(() => import('@/pages/home/Home'))
	}
};

export default routes;
