<script lang="ts">
    import type { Weapon } from "$lib/models/weapon"
    
    export let weapon: Weapon;

</script>

<div class="card" style="--clr: var(--element-{weapon.element}-color);">
    <div class="title">
        <div class="weapon-name">{weapon.name}</div>
        <img class="weapon-grade" src="/images/grade/{weapon.rarity.toLowerCase()}.png" alt="">
    </div>
    <!-- some kind of hr? -->
    <div class="details">
        <img class="weapon-image" src={weapon.image} alt="">
        <div class="stats">
            <div class="stat-wrapper">
                <div class="stat-box">
                    <i class="stat-tier" data-tier={weapon.shatter.tier.toLowerCase()}>
                        {weapon.shatter.tier}
                    </i>
                    <i class="stat-tier" data-tier={weapon.charge.tier.toLowerCase()}>
                        {weapon.charge.tier}
                    </i>
                </div>
                <div class="stat-box-tier">
                    <span class="stat">Shatter: {weapon.shatter.value}</span>
                    <span class="stat">Charge: {weapon.charge.value}</span>
                </div>
            </div>
            <div class="attributes">
                <img class="attribute-ex" src="/images/weapon_resonance/{weapon.resonance}.png" alt="attack">
                <img class="attribute-ex" src="/images/weapon_element/{weapon.element}.png" alt="volt">
                {#each weapon.attributes as attribute}
                    <div class="attribute">
                        <img class="attribute-icon" src="/images/weapon_attribute/{attribute}.png" alt={attribute}>
                        <span class="attribute-text">{attribute}</span>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>

    .card {
        display: flex;
        flex-direction: column;
        /* Gugi, made box */
        max-width: fit-content;
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .weapon-image {
        width: 12rem;
        height: 12rem;
    }

    .weapon-name {
        font-size: var(--text-size-large-6);
        font-weight: 700;
        color: var(--clr);
    }

    .weapon-grade {
        height: 2.5rem;
        width: 5rem;
    }

    .details {
        display: flex;
        align-items: center;
        gap: var(--margin-large-1)
    }

    .stats {
        display: flex;
        flex-direction: column;
        gap: var(--margin-large-2);
    }

    .stat-wrapper {
        display: flex;
        text-align: center;
        gap: var(--margin-large-1);
    }

    .stat-box {
        display: flex;
        flex-direction: column;
        gap: var(--margin-large-1);
    }

    .stat-box-tier {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: var(--text-size-large-2);
        gap: 0.5rem;
    }
    
    .attributes {
        display: flex;
        align-items: center;
        gap: var(--margin-large-1);
    }

    .attribute {
        display: flex;
        align-items: center;
        gap: var(--margin-small-2)
    }

    .attribute-text {
        text-transform: capitalize;
    }

    .attribute-icon {
        filter: invert(1) brightness(1.2);
        height: 1.8rem;
        width: 1.8rem;
    }

    .attribute-ex {
        height: 2rem;
        width: 2rem;
    }

    .stat {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    .stat-tier {
        text-transform: uppercase;
        font-style: normal;
        font-weight: 700;
        font-size: var(--text-size-large-2);
        background: #3b3e45;
        padding: 0.25rem 0.5rem;
        transform: skewX(-9deg);
        filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
    }

    .stat-tier[data-tier="c"] {
        color: var(--tier-c-color);
    }

    .stat-tier[data-tier="b"] {
        color: var(--tier-b-color);
    }

    .stat-tier[data-tier="a"] {
        color: var(--tier-a-color);
    }

    .stat-tier[data-tier="s"] {
        color: var(--tier-s-color);
    }

    .stat-tier[data-tier="ss"] {
        color: var(--tier-ss-color);
    }

</style>
