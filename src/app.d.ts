import type { ClickOutsideEventHandler } from "$lib/models/events";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	namespace svelteHTML {
		interface HTMLAttributes<T extends EventTarget> {
			'on:click_outside'?: ClickOutsideEventHandler<T> | null | undefined;
		}
	}
}

export {};
