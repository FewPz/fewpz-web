<script lang="ts">
	import { Github, Linkedin, Mail } from 'lucide-svelte';
	import { portfolioSections } from '$lib/data/sections';
	import Header from '$lib/components/Header.svelte';
	import EducationSection from '$lib/components/education/EducationSection.svelte';
	import ExperienceSection from '$lib/components/experience/ExperienceSection.svelte';
	import ProjectSection from '$lib/components/project/ProjectSection.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	// Pre-compute stars array for better performance
	const stars = Array.from({ length: 100 }, () => ({
		top: `${Math.random() * 100}%`,
		left: `${Math.random() * 100}%`,
		delay: `${Math.random() * 5}s`
	}));

	function setupHeaderAnimations() {
		const tl = gsap.timeline({
			defaults: { ease: 'power3.out' }
		});

		tl.from('h1', {
			y: -50,
			opacity: 0,
			duration: 0.8
		})
			.from(
				'p',
				{
					y: 20,
					opacity: 0,
					duration: 1.0
				},
				'-=0.3'
			)
			.from(
				'button, a',
				{
					scale: 0,
					opacity: 0,
					duration: 0.6,
					stagger: 0.1
				},
				'-=0.3'
			);
		return tl;
	}

	function setupStarAnimations() {
		gsap.to('.star', {
			scale: 1,
			opacity: 0.8,
			duration: 3,
			stagger: {
				amount: 4,
				from: 'random'
			},
			repeat: -1,
			yoyo: true,
			ease: 'power1.inOut'
		});
	}

	function setupScrollAnimations() {
		const sections = document.querySelectorAll('section');

		sections.forEach((section, index) => {
			gsap.from(section, {
				scrollTrigger: {
					trigger: section,
					start: 'top 80%', // Start animation when section is 80% into view
					end: 'top 60%', // End animation when section is 60% into view
					toggleActions: 'play none none none'
				},
				opacity: 0,
				y: 20,
				duration: 0.8 + index * 0.2, // Slight delay for each subsequent section
				ease: 'power3.out'
			});
		});
	}

	onMount(() => {
		requestAnimationFrame(() => {
			setTimeout(() => {
				setupHeaderAnimations();
				setupStarAnimations();
				setupScrollAnimations();
			}, 350);
		});
	});
</script>

<div class="min-h-screen bg-gray-50">
	<div class="relative bg-primary pb-8 pt-16 md:pb-12 md:pt-24">
		<!-- Star background with reduced DOM elements -->
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			{#each stars as star}
				<div
					class="star absolute h-1 w-1 rounded-full bg-white/10 opacity-0"
					style="top: {star.top}; left: {star.left}; animation-delay: {star.delay};"
				></div>
			{/each}
		</div>

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
						<button
							class="rounded bg-white px-4 py-2 font-semibold text-primary transition-colors hover:bg-slate-100 md:px-6"
							disabled
						>
							Resume
						</button>
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

<style>
	/* Optimize animations with transform */
	.star {
		will-change: transform, opacity;
	}

	@media (prefers-reduced-motion: reduce) {
		.star {
			animation: none;
		}
	}
</style>
