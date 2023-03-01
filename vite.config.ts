import { defineConfig } from 'vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
	plugins: [svgr(), eslintPlugin()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
