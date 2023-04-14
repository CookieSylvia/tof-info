<script lang="ts">
    export let data;

    $: sorted = [...data.matrices].sort((a, b) => {
        const rarityA = a.data.rarity;
        const rarityB = b.data.rarity;
        let rarity = (rarityB as string).length - (rarityA as string).length;
        if (b.data.rarity == "n") {
            rarity--;
        }
        const order = (b.data.order ?? 0) - (a.data.order ?? 0);
        return rarity || order;
    });
</script>

<svelte:head>
    <title>Matrices | ToF Resources</title>
</svelte:head>

{#each sorted as {data: matrix, path}}
    <a href={path} style="color: var(--rarity-{matrix.rarity}-color);">{matrix.name}</a><br/>
{/each}
