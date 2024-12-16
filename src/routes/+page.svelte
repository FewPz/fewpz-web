<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { Github, Linkedin, Mail, Plus } from 'lucide-svelte';
	import { portfolioSections } from '$lib/data/sections';
	import Header from '$lib/components/Header.svelte';
	import EducationSection from '$lib/components/education/EducationSection.svelte';
	import ExperienceSection from '$lib/components/experience/ExperienceSection.svelte';
	import ProjectSection from '$lib/components/project/ProjectSection.svelte';

	let stars = Array(100).fill(null);
</script>

<div class="min-h-screen bg-gray-50">
	<div class="relative bg-primary pb-12 pt-24">
		<div class="absolute inset-0 overflow-hidden">
			{#each stars as _, i}
				<div
					class="animate-twinkle absolute h-1 w-1 rounded-full bg-white/10"
					style="top: {Math.random() * 100}%; left: {Math.random() *
						100}%; animation-delay: {Math.random() * 5}s;"
				></div>
			{/each}
		</div>

		<div class="relative mx-auto max-w-7xl px-4">
			<h1 class="mb-4 text-5xl font-bold text-white">I'm Peeranat Matsor (Few) 🚀</h1>
			<p class="mb-8 max-w-3xl text-lg text-white">
				Third-Year Information Technology Student with a Focus on Software Engineer at the School of
				Information Technology, KMITL.
			</p>
			<div class="flex items-center gap-4">
				<button
					class="rounded bg-white px-6 py-2 font-semibold text-primary transition-colors hover:bg-slate-100"
					disabled
				>
					Resume
				</button>
				<div class="flex gap-4">
					<a
						href="https://github.com/FewPz"
						class="text-white transition-colors hover:text-pink-300"
					>
						<Github size={24} />
					</a>
					<a
						href="mailto:fewpz.peeranat@gmail.com"
						class="text-white transition-colors hover:text-pink-300"
					>
						<Mail size={24} />
					</a>
					<a
						href="https://www.linkedin.com/in/pfewpz/"
						class="text-white transition-colors hover:text-pink-300"
					>
						<Linkedin size={24} />
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Main Content -->
	<main class="mx-auto max-w-7xl px-4 py-8">
		<!-- Section Contents -->
		<EducationSection />
		<ExperienceSection />
		<ProjectSection />
	</main>
</div>

<style>
	@keyframes twinkle {
		0%,
		100% {
			opacity: 0.3;
			transform: scale(0.5);
		}
		50% {
			opacity: 1;
			transform: scale(1.5);
		}
	}

	.animate-twinkle {
		animation: twinkle 5s infinite ease-in-out;
	}
</style>
