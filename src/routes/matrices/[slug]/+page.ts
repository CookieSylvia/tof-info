import type { Matrix } from '$lib/models/matrices';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    const matrix = await import(`../../../lib/data/matrices/${params.slug}.json`) as Matrix
    
    return (matrix as Matrix & {default: Matrix}).default;
}) satisfies PageLoad;
