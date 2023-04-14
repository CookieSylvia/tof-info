import type { Matrix } from "$lib/models/matrices";
import { fetchAllExternal } from "$lib/utils"

export const load = async () => {
    const matrices = await fetchAllExternal<Matrix>('matrices');
    
    return {matrices};
};