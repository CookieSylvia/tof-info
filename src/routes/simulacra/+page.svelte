<script lang="ts">
    export let data;
</script>

{#each data.weapons as {data: weapon, path}}
    <a href={path}>{weapon.name}</a><br/>
{/each}
