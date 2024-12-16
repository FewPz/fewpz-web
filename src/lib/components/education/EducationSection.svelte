<script lang="ts">
	import { Book } from 'lucide-svelte';
	import EducationCard from './EducationCard.svelte';
	import { educationData } from '$lib/data/education';
</script>

<section id="education" class="mb-8 scroll-mt-20">
	<div class="rounded-lg bg-white p-8 shadow-sm">
		<div class="mb-8 flex items-center space-x-3">
			<Book size={24} class="text-primary" />
			<h2 class="text-2xl font-bold text-gray-800">Education</h2>
		</div>

		<div class="space-y-6">
			{#each educationData as education}
				<EducationCard {education} />
			{/each}
		</div>
	</div>
</section>
