/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	mount: {
		public: '/',
		src: '/dist'
	},
	plugins: [
		'@snowpack/plugin-webpack',
		'@snowpack/plugin-react-refresh',
		'@snowpack/plugin-babel'
	],
	routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
	optimize: {
		bundle: true
	},
	devOptions: {
		open: 'none'
	},
	packageOptions: {
		knownEntrypoints: ['react/jsx-runtime']
	},
	alias: {
		'@': './src'
	}
};
