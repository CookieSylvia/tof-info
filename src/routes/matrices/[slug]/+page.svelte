<script lang="ts">
   export let data;
</script>

<svelte:head>
    <title>{data.name} Matrix | ToF Resources</title>
</svelte:head>

<h1>Hello, {data.name} Matrix!</h1>

<img src={data.image} alt="{data.name} Matrix Piece">

<h2>Rarity: <span class="rarity">{data.rarity}</span></h2>

<h2>2pc</h2>
<p>{data.effects['2pc']}</p>
<h2>4pc</h2>
<p>{data.effects['4pc']}</p>

<style>
    h1 {
        font-size: 500%;
    }

    span {
        text-transform: uppercase;
    }
</style>