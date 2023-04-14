import type { Simulacra } from "$lib/models/simulacra";
import { fetchAllExternal } from "$lib/utils"

export const load = async () => {
    const simulacras = await fetchAllExternal<Simulacra>('simulacra');
    
    return {simulacras};
};
