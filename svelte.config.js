import { Glob } from 'glob';
import * as path from 'node:path';
import adapterGhpages from 'svelte-adapter-ghpages';
import preprocess from 'svelte-preprocess';

const getStaticEntries = async () => {
	const simulacraGlob = new Glob('src/lib/data/simulacra/*.json', {});
	const matricesGlob = new Glob('src/lib/data/matrices/*.json', {});
	
	const staticEntries = [];
	
	for await (const file of simulacraGlob) {
		const name = path.basename(file, '.json');
		console.log(`Simulacra: ${name}`);
		staticEntries.push(`/simulacra/${name}`);
	}

	for await (const file of matricesGlob) {
		const name = path.basename(file, '.json');
		console.log(`Matrix: ${name}`);
		staticEntries.push(`/matrices/${name}`);
	}
	
	return staticEntries;
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapterGhpages({
			precompress: false,
			strict: true,
		}),
		prerender: {
			entries: ["*", ...(await getStaticEntries())],
			handleHttpError: 'warn', // change to 'fail' at some point.
		}
	}
};

export default config;
