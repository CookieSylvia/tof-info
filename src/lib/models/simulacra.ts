import type { Weapon } from "./weapon";

export type SimulacraTrait = {
    affection: number;
    description: string;
}

export interface Simulacra {
    name: string;
    order?: number;
    traits: SimulacraTrait[];
    weapon: Weapon;
}