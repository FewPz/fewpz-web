<script lang="ts">
	import { onMount } from 'svelte';
	import { language } from '$lib/i18n/i18n-store';

	// Make sure the language store is initialized with the stored value
	onMount(() => {
		if (typeof window !== 'undefined') {
			const storedLang = localStorage.getItem('language');
			if (storedLang === 'en' || storedLang === 'th') {
				language.set(storedLang);
			}
		}
	});
</script>

<slot />
