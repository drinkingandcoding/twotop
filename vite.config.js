import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	vite: {
		optimizeDeps: {
			include: ['fuzzy']
		}
	}
};

export default config;
