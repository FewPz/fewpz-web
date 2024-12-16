<!-- Projects.svelte -->
<script lang="ts">
	import { Laptop } from 'lucide-svelte';
	import ProjectCard from './ProjectCard.svelte';
	import { projectsData } from '$lib/data/projects';
</script>

<section id="projects" class="mb-16 scroll-mt-20">
	<div class="rounded-lg bg-white p-8 shadow-sm">
		<div class="mb-8 flex items-center space-x-3">
			<Laptop size={24} class="text-primary" />
			<h2 class="text-2xl font-bold text-gray-800">Projects</h2>
		</div>

		<div class="space-y-6">
			{#each projectsData as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>
