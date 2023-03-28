import type elements from '../data/weapon_elements.json'

export interface Weapon {
    name: string;
    rarity: WeaponRarity;
    element: WeaponElementType;
    resonance: WeaponResonance;
    shatter: WeaponStat,
    charge: WeaponStat,
    attributes: WeaponAttribute[];
}

export type WeaponRarity = 'ssr' | 'sr' | 'r'
export type WeaponResonance = 'attack' | 'fortitude' | 'benediction';
export type WeaponAttribute = 'attack' | 'health' | 'resist' | 'crit';

export type WeaponStat = {
    tier: WeaponStatTier;
    value: string;
};
export type WeaponStatTier = 'ss' | 's' | 'a' | 'b' | 'c' | 'd';

export type WeaponElementType = keyof typeof elements;

export interface WeaponElement {
    name: string;
    color: string;
    values?: [string, string];
    description?: string;
}