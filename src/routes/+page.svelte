<script lang="ts">
	import { Github, Linkedin, Mail } from 'lucide-svelte';
	import EducationSection from '$lib/components/education/EducationSection.svelte';
	import ExperienceSection from '$lib/components/experience/ExperienceSection.svelte';
	import ProjectSection from '$lib/components/project/ProjectSection.svelte';
</script>

<div class="min-h-screen bg-gray-50">
	<div class="relative bg-primary pb-8 pt-16 md:pb-12 md:pt-24">

		<div class="relative mx-auto max-w-7xl px-4">
			<div class="flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">
				<div class="mb-8 md:mb-0">
					<h1 class="mb-4 text-3xl font-bold text-white md:text-5xl">
						I'm Peeranat Matsor (Few) 🚀
					</h1>
					<p class="mb-6 max-w-3xl text-base text-white md:text-lg">
						Third-Year Information Technology Student with a Focus on Software Engineer at the
						School of Information Technology, KMITL.
					</p>
					<div class="flex items-center gap-4">
						<a
							class="rounded bg-white px-4 py-2 font-semibold text-primary transition-colors hover:bg-slate-100 md:px-6"
							href="/pdf/cv.pdf"
							target="_blank"
						>
							Resume
						</a>
						<div class="flex gap-4">
							<a
								href="https://github.com/FewPz"
								class="text-white transition-colors hover:text-pink-300"
								rel="noopener noreferrer"
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
								rel="noopener noreferrer"
							>
								<Linkedin size={24} />
							</a>
						</div>
					</div>
				</div>
				<div class="relative h-32 w-32 md:h-48 md:w-48">
					<div
						class="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-pink-500 opacity-0 blur-xl"
					></div>
					<img
						src="/profile.jpg"
						alt="Few's Profile"
						class="relative h-full w-full border-4 border-white object-cover shadow-lg"
						loading="eager"
					/>
				</div>
			</div>
		</div>
	</div>

	<main class="mx-auto max-w-7xl px-4 py-8">
		<section>
			<EducationSection />
		</section>
		<section>
			<ExperienceSection />
		</section>
		<section>
			<ProjectSection />
		</section>
	</main>
</div>