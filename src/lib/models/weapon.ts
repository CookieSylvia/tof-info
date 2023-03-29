import type elements from '../data/weapon_elements.json'

export interface Weapon {
    name: string;
    image: string;
    rarity: WeaponRarity;
    element: WeaponElementType;
    resonance: WeaponResonance;
    shatter: WeaponStat,
    charge: WeaponStat,
    attributes: WeaponAttribute[];
    skills: WeaponSkill[];
    advancements: string[];
}

export type WeaponSkill = {
    name: string;
    type: string;
    image?: string;
    action?: string[];
    description: string;
    detailed?: string[];
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