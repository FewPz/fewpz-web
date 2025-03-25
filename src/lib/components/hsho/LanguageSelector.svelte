<script lang="ts">
	import { language, setLanguage } from '$lib/i18n/i18n-store';
	import { translations } from '$lib/i18n/translations';
	import type { Language } from '$lib/types/types';

	$: t = translations[$language];

	function switchLanguage(lang: Language) {
		setLanguage(lang);
	}

	const languages = [
		{ code: 'th', name: 'ไทย', flag: '🇹🇭' },
		{ code: 'en', name: 'English', flag: '🇬🇧' }
	];
</script>

<div class="relative flex items-center">
	<!-- Desktop Version (Buttons) -->
	<div class="hidden rounded-md bg-blue-800/50 p-0.5 shadow-sm sm:flex">
		{#each languages as lang}
			<button
				type="button"
				class={`flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900 ${$language === lang.code ? 'bg-white text-blue-900' : 'text-white hover:bg-blue-700'}`}
				aria-pressed={$language === lang.code}
				on:click={() => switchLanguage(lang.code as Language)}
			>
				<span class="mr-1.5">{lang.flag}</span>
				<span>{lang.name}</span>
			</button>
		{/each}
	</div>

	<!-- Mobile Version (Dropdown) -->
	<div class="sm:hidden">
		<label for="language-select" class="sr-only">{t.languageSelector.label}</label>
		<div class="relative">
			<button
				id="language-dropdown"
				type="button"
				class="flex w-full items-center justify-between rounded-md bg-blue-800/50 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
				aria-haspopup="listbox"
				aria-expanded="true"
				aria-labelledby="language-label"
			>
				<span class="mr-1.5">
					{languages.find((l) => l.code === $language)?.flag}
				</span>
				<span class="truncate">
					{languages.find((l) => l.code === $language)?.name}
				</span>
				<svg
					class="ml-1 h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>

			<div class="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
				<ul
					class="max-h-60 overflow-auto rounded-md py-1 text-base focus:outline-none sm:text-sm"
					tabindex="-1"
					role="listbox"
					aria-labelledby="language-label"
				>
					{#each languages as lang}
						<li
							class={`relative cursor-pointer select-none py-2 pl-3 pr-9 hover:bg-blue-50 ${$language === lang.code ? 'bg-blue-50 font-medium text-blue-900' : 'text-gray-900'}`}
							id={`language-option-${lang.code}`}
							role="option"
							aria-selected={$language === lang.code}
							on:click={() => switchLanguage(lang.code as Language)}
							on:keydown={(e) => e.key === 'Enter' && switchLanguage(lang.code as Language)}
							tabindex="0"
						>
							<div class="flex items-center">
								<span class="mr-2">{lang.flag}</span>
								<span class={$language === lang.code ? 'font-semibold' : 'font-normal'}>
									{lang.name}
								</span>
							</div>

							{#if $language === lang.code}
								<span class="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
									<svg
										class="h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
