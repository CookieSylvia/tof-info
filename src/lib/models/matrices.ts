
export type MatrixRarity = 'n' | 'r' | 'sr' | 'ssr'

export type MatrixEffect = {
    pieces: number;
    description: string;
};

export interface Matrix {
    name: string;
    order?: number;
    rarity: MatrixRarity;
    image: string;
    effects: MatrixEffect[];
}