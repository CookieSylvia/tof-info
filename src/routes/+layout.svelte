<script lang="ts">
    // globally available font, used by default
    // From: https://fontsource.org/fonts/sofia-sans
    import "@fontsource/sofia-sans/400.css"
    import "@fontsource/sofia-sans/400-italic.css"
    import "@fontsource/sofia-sans/700.css"
    import "@fontsource/sofia-sans/700-italic.css"
    import "@fontsource/sofia-sans/variable.css"
    import "@fontsource/sofia-sans/variable-italic.css"

    import * as nav from "$lib/data/navbar.json"

    // no other easy path for this ughh.. at least it somewhat complains.
    // FIXME(cookie): dont skip error checks (should probably just learn to use slots xdd)
    const navCheck: NavigationBarLazy = nav;
    const navLayout = navCheck as NavigationBar
    
    import type { NavigationBar, NavigationBarLazy } from "$lib/models/navbar"
    import Navbar from "$lib/components/navbar.svelte"

</script>

<Navbar navLayout={navLayout} />
<div class="page">
    <slot />
</div>

<style global>

    :root {
        --bg-color: #1a1a1a;
        --bg-hovor-color: #242424;
        --container-color: #101010;
        --shadow-color: rgba(0, 0, 0, 0.2);
        --default-text-color: #f2f4f5;
        --highlight-color: #5d5d5d;
        --stat-text-color: #b0ffc3;

        --element-volt-color: rgb(214, 205, 255);
        --element-flame-color: rgb(255, 162, 134);
        --element-physical-color: rgb(255, 219, 155);
        --element-frost-color: rgb(176, 233, 255);
        --element-altered-color: rgb(176, 255, 195);
        --element-bg-color: rgb(49, 59, 73);

        --rarity-n-color: #a2e4cb;
        --rarity-r-color: #b5dfff;
        --rarity-sr-color: #e1beff;
        --rarity-ssr-color: #ffdb84;

        --tier-c-color: #a2e4cb;
        --tier-b-color: #b5dfff;
        --tier-a-color: #e1beff;
        --tier-s-color: #ffdb84;
        --tier-ss-color: #fdebb7;

        /* Lots of... surely random pulled numbers; might be a good idea to revisit */

        --default-text-size: 1.125rem;
        --text-size-small-4: 0.25rem;
        --text-size-small-3: 0.445rem;
        --text-size-small-2: 0.889rem;
        --text-size-small-1: 1rem;
        --text-size-large-1: 1.266rem;
        --text-size-large-2: 1.424rem;
        --text-size-large-3: 1.602rem;
        --text-size-large-4: 1.80225rem;
        --text-size-large-5: 2.027rem;
        --text-size-large-6: 2.28rem;
        --text-size-large-7: 2.566rem;
        --text-size-large-8: 2.886rem;

        --letter-spacing-1: 0.12rem;
        --letter-spacing-2: 0.09rem;
        
        --default-margin: 0.3rem;
        --margin-small-2: 0.1rem;
        --margin-small-1: 0.2427rem;
        --margin-large-1: 0.4854rem;
        --margin-large-2: 0.9708rem;
        --margin-large-3: 1.4562rem;
        --margin-large-4: 1.9416rem;
        --margin-large-5: 2.427rem;
        --margin-large-6: 4.077rem;
        --margin-large-7: 6.849rem;

        --default-border-size: 0.3rem;
        --border-size-large: 1.5rem;

    }

    .volt-colors {
        --clr: var(--element-volt-color);
    }

    .flame-colors {
        --clr: var(--element-flame-color);
    }

    .physical-colors {
        --clr: var(--element-physical-color);
    }

    .frost-colors {
        --clr: var(--element-frost-color);
    }

    .altered-colors {
        --clr: var(--element-altered-color);
    }

    @media only screen and (min-width: 800px) and (min-height:800px) {
        html {
            font-size: 2vmin;
        }
    }

    html * {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        overflow: hidden;

         /* Find a better color :d */
        background-color: var(--bg-hovor-color);
        
        font-size: var(--default-text-size);
        font-family: "Sofia Sans", sans-serif;
        font-weight: 400;
    }

    @supports (font-variation-settings: normal) {
        body {
            font-family: "Sofia SansVariable", sans-serif;
        }
    }

    a, body {
        color: var(--default-text-color);
    }

    a {
        text-decoration: none;
    }

    .page {
        overflow-y: auto;
        position: absolute;
        scrollbar-gutter: stable;
        bottom: 0;
        top: 2.5rem;
        width: 100%;
    }

    ::-webkit-scrollbar {
        width: 16px;
    }

    ::-webkit-scrollbar-thumb {
        height: 56px;
        border-radius: 8px;
        border: 4px solid transparent;
        background-clip: content-box;
        background-color: #aaa;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #717171;
    }

</style>