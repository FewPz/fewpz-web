<script lang="ts">
	import { language, setLanguage } from '$lib/i18n/i18n-store';
	import { translations } from '$lib/i18n/translations';
	import type { Language } from '$lib/types/types';

	$: t = translations[$language];

	function handleChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		setLanguage(target.value as Language);
	}
</script>

<div class="flex items-center">
	<label for="language-select" class="mr-2 text-sm font-medium text-white">
		{t.languageSelector.label}:
	</label>
	<select
		id="language-select"
		value={$language}
		on:change={handleChange}
		class="rounded border border-blue-700 bg-blue-800 px-3 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
	>
		<option value="th">{t.languageSelector.options.th}</option>
		<option value="en">{t.languageSelector.options.en}</option>
	</select>
</div>
