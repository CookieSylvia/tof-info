<script lang="ts">
    export let data;
</script>

<svelte:head>
    <title>Matrices | ToF Resources</title>
</svelte:head>

{#each data.matrices as {data: matrix, path}}
    <a href={path}>{matrix.name}</a><br/>
{/each}
