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

    <WeaponCard weapon={data.simulacra.weapon} />

    <table class="advancement-table">
        <thead>
            <tr>
                <th>Stars</th>
                <th>Effect</th>
            </tr>
        </thead>
        <tbody>
            {#each data.simulacra.weapon.advancements as advancement, index}
                <tr>
                    <th class="advancement-star">{index+1} ★</th>
                    <td class="md-styling"><SvelteMarkdown source={advancement} /></td>
                </tr>
            {/each}
        </tbody>
    </table>

    <div>
        {#each data.simulacra.weapon.skills as skill}
            <h2 class="skill-title">{skill.name} - {skill.type}</h2>
            <span class="md-styling"><SvelteMarkdown source={skill.description} /></span>
            {#if skill.detailed}
                <ol class="details">
                    {#each skill.detailed as detail}
                        <li class="detail">
                            <span class="md-styling"><SvelteMarkdown source={detail} /></span>
                        </li>
                    {/each}
                </ol>
            {/if}

        {/each}
    </div>
</div>



<style>
    h1, h2 {
        color: var(--clr);
    }

    .detail::marker {
        color: var(--clr);
    }
    
    .advancement-table {
        border-collapse: collapse;
    }

    .advancement-table th, .advancement-table td {
        padding: var(--text-size-small-3);
    }

    .advancement-table thead {
        border-bottom: 2px solid var(--clr);
    }

    .advancement-table tr {
        background-color: var(--container-color);
    }

    .advancement-table tr:nth-child(odd) {
        background-color: var(--bg-color);
    }

    .advancement-star {
        color: var(--tier-s-color);
    }

    :global(.md-styling strong) {
        color: var(--clr);
        font-weight: bold;
        font-style: normal;
    }

    :global(.md-styling em) {
        color: lightgreen;
        font-weight: bold;
        font-style: normal;
    }

    :global(.md-styling em strong) {
        color: lightcoral;
        font-weight: bold;
        font-style: normal;
    }

</style>