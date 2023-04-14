<script lang="ts">
    export let href = '';
    export let title: string | undefined = undefined;
</script>

{#if href.startsWith("https://") || href.startsWith("/") }
    <a {href} {title}><slot></slot></a>
{:else}
    <span class="{href}{title != undefined ? ` ${title}` : ""}"><slot></slot></span>
{/if}