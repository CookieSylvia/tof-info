
export type MatrixRarity = 'n' | 'r' | 'sr' | 'ssr'

export interface Matrix {
    name: string;
    rarity: MatrixRarity;
    image: string;
    effects: {
        "2pc": string;
        "4pc": string;
    };
}