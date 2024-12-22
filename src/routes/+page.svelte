<script lang="ts">
	import { Github, Linkedin, Mail, Plus } from 'lucide-svelte';
	import { portfolioSections } from '$lib/data/sections';
	import Header from '$lib/components/Header.svelte';
	import EducationSection from '$lib/components/education/EducationSection.svelte';
	import ExperienceSection from '$lib/components/experience/ExperienceSection.svelte';
	import ProjectSection from '$lib/components/project/ProjectSection.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	let stars = Array(100).fill(null);

	onMount(() => {
		const tl = gsap.timeline();

		// Animate heading
		tl.from('h1', {
			y: -50,
			opacity: 0,
			duration: 1,
			ease: 'power3.out'
		});

		// Animate paragraph
		tl.from(
			'p',
			{
				y: 20,
				opacity: 0,
				duration: 1,
				ease: 'power3.out'
			},
			'-=0.5'
		);

		// Animate buttons and links
		tl.from(
			'button',
			{
				scale: 0,
				opacity: 0,
				duration: 0.8,
				ease: 'back.out(1.7)'
			},
			'-=0.5'
		);

		tl.from(
			'a',
			{
				opacity: 0,
				y: 10,
				stagger: 0.2,
				duration: 0.6,
				ease: 'power2.out'
			},
			'-=0.5'
		);

		// Stars twinkling
		gsap.set('.animate-twinkle', {
			opacity: 0,
			scale: 0
		});
		gsap.to('.animate-twinkle', {
			scale: 1,
			opacity: 1,
			duration: 5,
			stagger: 0.1,
			ease: 'power1.inOut',
			repeat: -1,
			yoyo: true
		});

		// Scroll animations for sections
		gsap.from('main > *', {
			scrollTrigger: {
				trigger: 'main',
				start: 'top 80%', // Start when section is 80% into view
				end: 'bottom 20%', // End when 20% of the section is out of view
				toggleActions: 'play none none none'
			},
			opacity: 0,
			y: 50,
			duration: 1,
			stagger: 0.3,
			ease: 'power3.out'
		});

		// Profile Picture Animation
		gsap.from('.profile-picture', {
			scale: 0,
			opacity: 0,
			duration: 1.5,
			ease: 'elastic.out(1, 0.5)',
			rotation: 360
		});

		// Glow effect animation
		gsap.to('.profile-glow', {
			opacity: 1,
			scale: 1.2,
			repeat: -1,
			yoyo: true,
			duration: 2,
			ease: 'power2.inOut'
		});
	});
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
			<div class="flex items-center justify-between gap-8">
				<div>
					<h1 class="mb-4 text-5xl font-bold text-white">I'm Peeranat Matsor (Few) 🚀</h1>
					<p class="mb-8 max-w-3xl text-lg text-white">
						Third-Year Information Technology Student with a Focus on Software Engineer at the
						School of Information Technology, KMITL.
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
				<div class="relative">
					<div
						class="profile-glow absolute inset-0 rounded-full bg-gradient-to-r from-primary to-pink-500 opacity-0 blur-xl"
					></div>
					<img
						src="/profile.jpg"
						alt="Few's Profile"
						class="profile-picture relative h-48 w-48 border-4 border-white object-cover shadow-lg"
					/>
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
