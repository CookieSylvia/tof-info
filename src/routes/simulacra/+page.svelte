<script lang="ts">
    import Navbar from '../navbar.svelte';
    export let data;
</script>

<Navbar />

{#each data.weapons as {data: weapon, path}}
    <a href={path}>{weapon.name}</a><br/>
{/each}
