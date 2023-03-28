<script lang="ts">
    import type { ClickOutsideEvent } from "$lib/models/events"
    import type { NavigationBar } from "$lib/models/navbar"
    import { clickOutside } from "$lib/utils/ClickOutside"

    export let navLayout: NavigationBar;

    let currentDropdown: Node | undefined;
    let dropdowns: {[key: string]: Node | undefined} = {};

    const handleDropdown = (self?: Node) => (event: MouseEvent) => {
        if (currentDropdown == self && event.target instanceof Element) {
            currentDropdown = event.target.closest('.dropdown') ? self : undefined; 
        } else {
            currentDropdown = self;
        }
    };

    const handleOutside = (event: ClickOutsideEvent) => {
        if (event.detail.target instanceof Element) {
            if (!event.detail.target.closest('.nav-item')) {
                currentDropdown = undefined;
            }
        }
    };
</script>

<nav class="nav">
    <a class="nav-item" href="{navLayout.link ?? '/'}">
        {#if navLayout.icon}
            <img class="item-icon" src="{navLayout.icon}" alt="">
        {/if}
        {#if navLayout.name}
            <span class="item-text">{navLayout.name}</span>
        {/if}
    </a>
    <div class="nav-items">
        {#each navLayout?.navigation ?? [] as navItem}
            {#if navItem.type == 'link'}
                <a href="{navItem.link}" class="nav-link">
                    {#if navItem.icon}
                        <img class="item-icon" src={navItem.icon} alt="">
                    {/if}
                    {#if navItem.name}
                        <span class="item-text{navItem.icon ? ' item-small-hide' : ''}">
                            {navItem.name}
                        </span>
                    {/if}
                </a>
            {:else if navItem.type == 'dropdown'}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="nav-item"
                    on:click|stopPropagation={handleDropdown(dropdowns[navItem.id])}
                    use:clickOutside
                    on:click_outside={handleOutside}
                    bind:this={dropdowns[navItem.id]}
                    >
                    {#if navItem.icon}
                        <img class="item-icon" src={navItem.icon} alt="">
                    {/if}
                    {#if navItem.name}
                        <span class="item-text{navItem.icon ? ' item-small-hide' : ''}">
                            {navItem.name}
                        </span>
                    {/if}
                    {#if currentDropdown && currentDropdown == dropdowns[navItem.id]}
                        <div class="dropdown">
                            {#each navItem.list as navDrop}
                                {#if !navDrop.external}
                                    <a class="dropdown-item" href={navDrop.link}>{navDrop.name}</a>
                                {:else}
                                    <a class="dropdown-item" target="_blank' rel='noopener noreferrer nofollow" href={navDrop.link}>{navDrop.name}</a>
                                {/if}
                            {/each}
                        </div>
                    {/if}
                </div>
            {/if}
        {/each}
    </div>
</nav>

<style>

    .item-text, .item-icon {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        -ms-user-drag: none;
        -webkit-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    .nav {
        background-color: var(--container-color);
        letter-spacing: var(--letter-spacing-2);
        padding: 0 var(--margin-large-3);
        box-shadow: 0 0.2rem 0.4rem 0 var(--shadow-color);
        display: flex;
        justify-content: space-between;
        height: 2.5rem;
        min-height: 2.5rem;
        position: sticky;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 10000 !important;
    }

    .nav-items {
        font-size: var(--text-size-large-1);
        display: flex;
        gap: var(--margin-large-2);
    }

    .nav-item, .nav-link {
        display: flex;
        align-items: center;
        gap: var(--margin-small-2);
        padding: 0 var(--default-margin);
        position: relative;
        cursor: pointer;
    }

    .nav-item:hover, .nav-link:hover {
        background-color: var(--bg-hovor-color);
    }

    .dropdown {
        background-color: var(--bg-color);
        border-radius: var(--default-border-size);
        box-shadow: 0 0.1rem 0.1rem var(--shadow-color);
        font-size: var(--text-size-large-2);
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: var(--default-margin);
        min-width: 15rem;
        max-height: calc(100vh - 4.5rem);
        padding: var(--default-margin);
        position: absolute;
        right: 0;
        top: 3rem;
        white-space: nowrap;
        overflow-x: hidden;
        cursor: auto;
    }

    @media only screen and (max-width: 500px) {
        .nav-item {
            position: static;
        }

        .dropdown {
            left: 2vw;
            width: calc(100% - 4vw);
        }
    }

    .dropdown-item {
        border-radius: var(--default-border-size);
        padding: var(--margin-large-1);
        text-overflow: clip;
    }

    .dropdown-item:hover {
        background-color: var(--bg-hovor-color);
    }

    .item-icon {
        height: 2.4rem;
        width: 2.4rem;
    }
    
    .item-icon ~ .item-text {
        margin-left: var(--margin-large-1);
    }

    .item-small-hide {
        display: none;
    }

    @media only screen and (min-width: 1000px) {
        .item-small-hide {
            display: block;
        }
    }

</style>