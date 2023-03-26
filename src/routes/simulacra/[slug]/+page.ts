import type { Weapon } from '$lib/models/weapon';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    const weapon = await import(`../../../lib/data/weapons/${params.slug}.json`) as Weapon
    
    return (weapon as Weapon & {default: Weapon}).default;
}) satisfies PageLoad;
