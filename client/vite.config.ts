import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			fastRefresh: true
		}),
		tsconfigPaths()
	],
	build: {
		rollupOptions: {
			external: 'index.css'
		}
	},
	server: {
		port: 3002
	},
	publicDir: './public'
});
