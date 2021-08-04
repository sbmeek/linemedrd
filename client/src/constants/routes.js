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
	}
};

export default routes;
