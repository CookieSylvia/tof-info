<script lang="ts">
    export let data;
</script>

{#each data.matrices as {data: matrix, path}}
    <a href={path}>{matrix.name}</a><br/>
{/each}
