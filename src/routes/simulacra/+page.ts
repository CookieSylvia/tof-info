import type { Weapon } from "$lib/models/weapon"
import { fetchAllExternal } from "$lib/utils"

export const load = async () => {
    const weapons = await fetchAllExternal<Weapon>('weapons', 'simulacra');
    
    return {weapons};
};
