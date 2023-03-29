
export type MatrixRarity = 'n' | 'r' | 'sr' | 'ssr'

export type MatrixEffect = {
    pieces: number;
    description: string;
};

export interface Matrix {
    name: string;
    rarity: MatrixRarity;
    image: string;
    effects: MatrixEffect[];
}