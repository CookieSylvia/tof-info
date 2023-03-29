import type { Simulacra } from '$lib/models/simulacra';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    const simulacra = await import(`../../../lib/data/simulacra/${params.slug}.json`) as Simulacra
    
    return {
        simulacra,
        slug: params.slug,
    };
}) satisfies PageLoad;
