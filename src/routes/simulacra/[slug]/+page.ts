import type { Simulacra } from '$lib/models/simulacra';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    const weapon = await import(`../../../lib/data/simulacra/${params.slug}.json`) as Simulacra
    
    return (weapon as Simulacra & {default: Simulacra}).default;
}) satisfies PageLoad;
