<script lang="ts">
	import type { Experience } from '$lib/types/experience';
	import { Calendar, MapPin, Briefcase } from 'lucide-svelte';

	export let experience: Experience;
</script>

<div
	class="rounded-lg border-l-4 border-primary bg-white shadow-sm transition-all duration-300 hover:shadow-md"
>
	<div class="p-6">
		<!-- Header -->
		<div class="mb-4 flex items-start justify-between">
			<div>
				<h3 class="text-xl font-semibold text-gray-800">{experience.position}</h3>
				<div class="font-medium text-primary">{experience.company}</div>
			</div>
			{#if experience.companyLogo}
				<img
					src={experience.companyLogo}
					alt={`${experience.company} logo`}
					class="h-12 w-12 object-contain"
				/>
			{/if}
		</div>

		<!-- Meta Information -->
		<div class="mb-4 flex flex-wrap gap-4 text-sm text-gray-600">
			<div class="flex items-center">
				<Calendar size={16} class="mr-2" />
				<span>{experience.startDate} - {experience.endDate}</span>
			</div>
			<div class="flex items-center">
				<MapPin size={16} class="mr-2" />
				<span>{experience.location}</span>
			</div>
		</div>

		<!-- Description -->
		<p class="mb-4 text-gray-600">
			{experience.description}
		</p>

		<!-- Responsibilities -->
		<div class="mb-4">
			<h4 class="mb-2 font-medium text-gray-800">Key Responsibilities:</h4>
			<ul class="list-inside list-disc space-y-1 text-gray-600">
				{#each experience.responsibilities as responsibility}
					<li>{responsibility}</li>
				{/each}
			</ul>
		</div>

		<!-- Technologies -->
		<div>
			<h4 class="mb-2 font-medium text-gray-800">Technologies:</h4>
			<div class="flex flex-wrap gap-2">
				{#each experience.technologies as tech}
					<span class="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-600">
						{tech}
					</span>
				{/each}
			</div>
		</div>
	</div>
</div>
