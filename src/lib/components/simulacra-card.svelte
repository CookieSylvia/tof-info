<script lang="ts">
    export let simulacra: string = 'ruby';
    export let name: string = 'Ruby';
    export let rarity: string = 'ssr';
    export let element: string = 'flame';
    export let resonance: string = 'attack';
</script>

<a class="simulacrum" href="/simulacra/{simulacra}">
    <div class="card">
        <div class="content">
            <img class="splash" src="/images/simulacrum/{simulacra}-card.png" alt={name} data-rarity={rarity}>
            <img class="element" src="/images/weapon_element/{element}.png" alt={element}>
            <img class="resonance" src="/images/weapon_resonance/{resonance}.png" alt={resonance}>
        </div>
        <span class="name" title={name}>{name}</span>
    </div>
</a>

<style>

    .simulacrum * {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        -ms-user-drag: none;
        -webkit-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    .card {
        border-radius: var(--default-border-size);
        display: flex;
        align-items: stretch;
        flex-direction: column;
        background-color: var(--bg-color);
        width: 6rem;
        transition: -webkit-transform .2s;
        transition: transform .2s;
        transition: transform .2s -webkit-transform .2s;
    }

    .card:hover {
        background-color: var(--highlight-color);
        font-weight: 700;
        transform: scale(1.025);
    }

    .content {
        position: relative;
    }

    .name {
        display: inline-block;
        line-height: normal;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        padding-bottom: var(--default-margin);
        padding-left: var(--default-margin);
        padding-right: var(--default-margin);
    }

    .splash {
        background-size: contain;
        border-radius: var(--default-border-size);
        min-height: 8.213rem;
        width: 6rem;
        min-width: 6rem;
        max-width: 6rem;
        object-fit: cover;
    }

    .element {
        position: absolute;
        bottom: var(--margin-large-1);
        left: var(--margin-small-1);
        height: 1.5rem;
        width: 1.5rem;
    }

    .resonance {
        position: absolute;
        bottom: var(--margin-large-1);
        right: var(--margin-small-1);
        height: 1.5rem;
        width: 1.5rem;
    }

    img[data-rarity="ssr"] {
        background-image: url("/images/simulacrum/background/ssr.webp");
    }

    img[data-rarity="sr"] {
        background-image: url("/images/simulacrum/background/sr.webp");
    }

    img[data-rarity="r"] {
        background-image: url("/images/simulacrum/background/r.webp");
    }

</style>
