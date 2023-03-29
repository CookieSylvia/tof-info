<script lang="ts">
    import SvelteMarkdown from "svelte-markdown"

   export let data;
</script>

<svelte:head>
    <title>{data.name} Matrix | ToF Resources</title>
</svelte:head>

<div style="--clr: var(--rarity-{data.rarity}-color);">
    <h1>{data.name}</h1>

    <img src={data.image} alt="{data.name} Matrix Piece">

    <h2>Rarity: <img src="/images/grade/{data.rarity}.png" alt={data.rarity}></h2>


    {#each data.effects as effect}
        <h2>{effect.pieces}pc</h2>
        <div class="md-styling"><SvelteMarkdown source={effect.description} /></div>
    {/each}

</div>

<style>
    h1 {
        font-size: 500%;
    }

    :global(.md-styling strong) {
        color: lightskyblue;
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