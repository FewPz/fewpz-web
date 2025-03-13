<script lang="ts">
	import type { Education } from '$lib/types/education';
	import { Calendar, Award, BookA } from 'lucide-svelte';

	export let education: Education;
	let showMore = false;

	function toggleShowMore() {
		showMore = !showMore;
	}
</script>

<div
	class="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
>
	<div class="border-l-4 border-primary">
		<div class="p-6">
			<!-- Header -->
			<div class="mb-4 flex items-start justify-between">
				<div>
					<h3 class="text-xl font-semibold text-gray-800">{education.school}</h3>
					<p class="font-medium text-primary">{education.degree} in {education.field}</p>
				</div>
				{#if education.logo}
					<img
						src={education.logo}
						alt={`${education.school} logo`}
						class="h-12 w-12 object-contain"
					/>
				{/if}
			</div>
			<div class="flex items-center text-gray-600">
				<Calendar size={16} class="mr-2" />
				<span>{education.startYear} - {education.endYear}</span>
			</div>
			<button
				class="mt-4 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary-dark focus:outline-none"
				on:click={toggleShowMore}
			>
				{showMore ? 'Show Less' : 'Read More'}
			</button>
			{#if showMore}
				{#if education.gpa}
					<div class="mt-4 flex items-center text-gray-600">
						<BookA size={16} class="mr-2" />
						<span>GPA: {education.gpa}</span>
					</div>
				{/if}
				{#if education.achievements && education.achievements.length > 0}
					<div class="mt-4">
						<div class="mb-2 flex items-center text-gray-800">
							<Award size={16} class="mr-2" />
							<span class="font-medium">Key Achievements</span>
						</div>
						<ul class="list-inside list-disc space-y-1 text-gray-600">
							{#each education.achievements as achievement}
								<li>{achievement}</li>
							{/each}
						</ul>
					</div>
				{/if}
			{/if}
		</div>
	</div>
</div>
