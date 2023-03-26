import type elements from '../data/weapon_elements.json'

export interface Weapon {
    name: string;
    element: WeaponElementType;
    type: "attack" | "fortitude" | "benediction";
    shatter: {
        tier: "SS" | "S" | "A" | "B" | "C" | "D";
        value: string;
    },
    charge: {
        tier: "SS" | "S" | "A" | "B" | "C" | "D";
        value: string;
    },
    attributes: "attack" | "health" | "resist" | "crit"
}

export type WeaponElementType = keyof typeof elements;

export interface WeaponElement {
    name: string;
    color: string;
    values?: [string, string];
    description?: string;
}