<script lang="ts">
    import type { WeaponElementType } from '$lib/models/weapon';
    import elements from '$lib/data/weapon_elements.json';

    export let data;

    const getElementColor = (element: WeaponElementType) => {
        return elements[element].color;
    }
</script>

<svelte:head>
    <title>{data.name} | Tower of Fantasy Info</title>
</svelte:head>

<h1 style:color={getElementColor(data.element)}>Hello, {data.name}!</h1>

<style>
    h1 {
        font-size: 1000%;
    }
</style>