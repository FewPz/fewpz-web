<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	// Get error details from props
	export let data: {
		status?: string | number;
		message?: string;
		description?: string;
	};

	let container: HTMLDivElement | null = null;
	let errorCode: HTMLHeadingElement | null = null;
	let message: HTMLHeadingElement | null = null;
	let description: HTMLParagraphElement | null = null;
	let button: HTMLAnchorElement | null = null;
	let decorativeCircles: HTMLDivElement[] = [];

	onMount(() => {
		// Create main timeline
		const tl = gsap.timeline({
			defaults: {
				duration: 1,
				ease: 'power3.out'
			}
		});

		// Decorative circles animation
		gsap.set(decorativeCircles, {
			scale: 0,
			opacity: 0,
			rotation: -180
		});

		// Main animation sequence
		tl.from(container, {
			opacity: 0,
			duration: 0.5
		})
			.from(errorCode, {
				y: -100,
				opacity: 0,
				rotation: -10,
				ease: 'elastic.out(1, 0.5)'
			})
			.from(
				message,
				{
					x: -50,
					opacity: 0
				},
				'-=0.5'
			)
			.from(
				description,
				{
					y: 30,
					opacity: 0
				},
				'-=0.7'
			)
			.from(
				button,
				{
					scale: 0,
					opacity: 0,
					ease: 'back.out(1.7)'
				},
				'-=0.5'
			)
			.to(
				decorativeCircles,
				{
					scale: 1,
					opacity: 0.6,
					rotation: 0,
					duration: 1.5,
					stagger: 0.2,
					ease: 'elastic.out(1, 0.3)'
				},
				'-=1'
			);
	});
</script>

<div
	class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
	bind:this={container}
>
	<!-- Decorative circles -->
	{#each Array(5) as _, i}
		<div
			bind:this={decorativeCircles[i]}
			class="absolute rounded-full opacity-60 blur-xl"
			style="
                width: {100 + i * 50}px;
                height: {100 + i * 50}px;
                background: hsl({30 + i * 20}, 70%, 50%); /* Primary color hues */
                left: {Math.random() * 100}%;
                top: {Math.random() * 100}%;
                z-index: 0;
            "
		></div>
	{/each}

	<!-- Content container -->
	<div class="relative z-10 mx-auto max-w-xl px-4 text-center">
		<!-- Error code -->
		<h1
			bind:this={errorCode}
			class="to-primary-light mb-8 bg-gradient-to-r from-primary bg-clip-text text-8xl font-bold text-transparent"
		>
			{data?.status || '404'}
		</h1>

		<!-- Error message -->
		<h2 bind:this={message} class="mb-4 text-3xl font-semibold">
			{data?.message || 'Page Not Found'}
		</h2>

		<!-- Description -->
		<p bind:this={description} class="mb-8 text-lg text-gray-300">
			{data?.description || "The page you're looking for doesn't exist or has been moved."}
		</p>

		<!-- Button -->
		<a
			href="/"
			bind:this={button}
			class="inline-block rounded-lg bg-primary px-8 py-4 font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
			on:mouseenter={(e) => gsap.to(e.target, { scale: 1.05, duration: 0.3 })}
			on:mouseleave={(e) => gsap.to(e.target, { scale: 1, duration: 0.3 })}
		>
			Return Home
		</a>
	</div>
</div>

<style>
	/* Optional: Add any additional styles here */
	:global(body) {
		margin: 0;
		padding: 0;
	}

	/* Tailwind primary color adjustments */
	.bg-primary {
		background-color: #fa872d;
	}
	.from-primary {
		--tw-gradient-from: #fa872d;
	}
	.to-primary-light {
		--tw-gradient-to: #ffa859;
	}
</style>
