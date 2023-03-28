<script lang="ts">
    import type { WeaponElementType } from '$lib/models/weapon';
    import elements from '$lib/data/weapon_elements.json';

    export let data;

    const getElementColor = (element: WeaponElementType) => {
        return elements[element].color;
    }
</script>

<svelte:head>
    <title>{data.name} | ToF Resources</title>
</svelte:head>

<h1 style:color={getElementColor(data.weapon.element)}>Hello, {data.name} with {data.weapon.name}!</h1>

<pre>{JSON.stringify(data, null, 2)}</pre>

<style>
    h1 {
        font-size: 500%;
    }
</style>