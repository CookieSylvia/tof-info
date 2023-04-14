<script lang="ts">
</script>

<div class="grid">
    <slot />
</div>

<style>
    .grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: var(--margin-large-2);
    }
</style>