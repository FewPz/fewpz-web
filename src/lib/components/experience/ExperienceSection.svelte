<script lang="ts">
	import { Briefcase } from 'lucide-svelte';
	import ExperienceCard from './ExperienceCard.svelte';
	import { experienceData } from '$lib/data/experience';
</script>

<section id="experience" class="mb-8 scroll-mt-20">
	<div class="rounded-lg bg-white p-8 shadow-sm">
		<div class="mb-8 flex items-center space-x-3">
			<Briefcase size={24} class="text-primary" />
			<h2 class="text-2xl font-bold text-gray-800">Experience</h2>
		</div>

		<div class="space-y-6">
			{#each experienceData as experience}
				<ExperienceCard {experience} />
			{/each}
		</div>
	</div>
</section>
