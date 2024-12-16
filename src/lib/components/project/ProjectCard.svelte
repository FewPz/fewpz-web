<!-- ProjectCard.svelte -->
<script lang="ts">
	import type { Project } from '$lib/types/project';
	import { Github, ExternalLink, Clock, User, CheckCircle, AlertCircle } from 'lucide-svelte';

	export let project: Project;

	const getStatusColor = (status: Project['status']) => {
		switch (status) {
			case 'Completed':
				return 'bg-green-50 text-green-600';
			case 'In Progress':
				return 'bg-yellow-50 text-yellow-600';
			case 'Maintenance':
				return 'bg-red-50 text-red-600';
		}
	};
</script>

<div
	class="rounded-lg border-l-4 border-primary bg-white shadow-sm transition-all duration-300 hover:shadow-md"
>
	<div class="p-6">
		<!-- Header -->
		<div class="mb-4 flex items-start justify-between">
			<div>
				<h3 class="text-xl font-semibold text-gray-800">{project.title}</h3>
				<div class="mt-1 flex items-center gap-2">
					<span class={`rounded-full px-3 py-1 text-sm ${getStatusColor(project.status)}`}>
						{project.status}
					</span>
				</div>
			</div>
			{#if project.imageUrl}
				<img
					src={project.imageUrl}
					alt={`${project.title} preview`}
					class="h-16 w-16 rounded object-cover"
				/>
			{/if}
		</div>

		<!-- Meta Information -->
		<div class="mb-4 flex flex-wrap gap-4 text-sm text-gray-600">
			<div class="flex items-center">
				<User size={16} class="mr-2" />
				<span>{project.role}</span>
			</div>
		</div>

		<!-- Description -->
		<p class="mb-4 text-gray-600">
			{project.description}
		</p>

		<!-- Technologies -->
		<div class="mb-4">
			<h4 class="mb-2 font-medium text-gray-800">Technologies:</h4>
			<div class="flex flex-wrap gap-2">
				{#each project.technologies as tech}
					<span class="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-600">
						{tech}
					</span>
				{/each}
			</div>
		</div>

		<!-- Links -->
		{#if project.githubUrl || project.demoUrl}
			<div class="mt-4 flex gap-4">
				{#if project.githubUrl}
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center text-sm text-gray-600 hover:text-orange-600"
					>
						<Github size={16} class="mr-2" />
						View Code
					</a>
				{/if}
				{#if project.demoUrl}
					<a
						href={project.demoUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center text-sm text-gray-600 hover:text-orange-600"
					>
						<ExternalLink size={16} class="mr-2" />
						Live Demo
					</a>
				{/if}
			</div>
		{/if}
	</div>
</div>
