<script lang="ts">
	import { Menu, Bell } from 'lucide-svelte';
	import type { Section } from '$lib/data/sections';

	export let sections: Section[];

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
</script>

<header class="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm">
	<div class="mx-auto max-w-7xl px-4">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center space-x-4">
				<Menu class="h-6 w-6 text-gray-500" />
				<span class="text-xl font-medium text-gray-700">Portfolio</span>
			</div>
			<nav class="hidden space-x-4 md:flex">
				{#each sections as section}
					<button
						on:click={() => scrollToSection(section.id)}
						class="text-gray-600 transition-colors duration-300 hover:text-blue-600"
					>
						{section.title}
					</button>
				{/each}
			</nav>
			<div class="flex items-center space-x-4">
				<Bell class="h-6 w-6 text-gray-500" />
				<div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
					<span class="text-sm font-medium text-gray-600">A</span>
				</div>
			</div>
		</div>
	</div>
</header>
