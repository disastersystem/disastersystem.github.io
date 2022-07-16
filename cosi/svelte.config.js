// import adapter from '@sveltejs/adapter-auto';
import static_adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter: adapter()
		adapter: static_adapter()
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
