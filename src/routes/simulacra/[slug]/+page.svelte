<script lang="ts">
    //import type { WeaponElementType } from '$lib/models/weapon';
    import SvelteMarkdown from 'svelte-markdown'
    //import elements from '$lib/data/weapon_elements.json';
    import WeaponCard from '$lib/components/weapon-card.svelte';

    export let data;

    // const getElementColor = (element: WeaponElementType) => {
    //     return elements[element].color;
    // }
</script>

<svelte:head>
    <title>{data.simulacra.name} | ToF Resources</title>
</svelte:head>

<div style="--clr: var(--element-{data.simulacra.weapon.element}-color);">
    <h1>{data.simulacra.name}</h1>
    <h2>{data.simulacra.weapon.name}</h2>
</div>

<WeaponCard weapon={data.simulacra.weapon} />

<div>
    {#each data.simulacra.weapon.skills as skill}
        <h2 class="skill-title">{skill.name} - {skill.type}</h2>
        <SvelteMarkdown source={skill.description} />
        {#if skill.detailed}
            <h3>Details:</h3>
            {#each skill.detailed as detail}
                <SvelteMarkdown source={detail} />
            {/each}
        {/if}

    {/each}
</div>

<style>
    h1, h2 {
        color: var(--clr)
    }
</style>