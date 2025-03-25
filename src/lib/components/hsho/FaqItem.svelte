<script context="module">
	// Add the easing function
	function cubicOut(t: number): number {
		const f = t - 1.0;
		return f * f * f + 1.0;
	}

	// Add a slide transition
	function slide(node: Element, { delay = 0, duration = 400, easing = cubicOut }) {
		const style = getComputedStyle(node);
		const height = parseFloat(style.height);
		const padding_top = parseFloat(style.paddingTop);
		const padding_bottom = parseFloat(style.paddingBottom);
		const margin_top = parseFloat(style.marginTop);
		const margin_bottom = parseFloat(style.marginBottom);
		const border_top_width = parseFloat(style.borderTopWidth);
		const border_bottom_width = parseFloat(style.borderBottomWidth);

		return {
			delay,
			duration,
			easing,
			css: (t: number) =>
				'overflow: hidden;' +
				`height: ${t * height}px;` +
				`padding-top: ${t * padding_top}px;` +
				`padding-bottom: ${t * padding_bottom}px;` +
				`margin-top: ${t * margin_top}px;` +
				`margin-bottom: ${t * margin_bottom}px;` +
				`border-top-width: ${t * border_top_width}px;` +
				`border-bottom-width: ${t * border_bottom_width}px;`
		};
	}
</script>

<script lang="ts">
	export let question: string;
	export let answer: string;
	export let isOpen = false;

	// Format the answer text to handle newlines
	function formatAnswer(text: string): string {
		// Replace all newline characters with <br> tags
		// Also handle special case where /n is explicitly written in text
		return text.replace(/\n/g, '<br>').replace(/\/n/g, '<br>');
	}

	function toggleOpen() {
		isOpen = !isOpen;
	}
</script>

<div
	class="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow duration-300 {isOpen
		? 'shadow-md'
		: 'hover:shadow-sm'}"
>
	<button
		class="flex w-full items-center justify-between bg-white px-5 py-4 text-left transition-colors hover:bg-gray-50"
		on:click={toggleOpen}
		aria-expanded={isOpen}
		aria-controls="faq-answer"
	>
		<span class="pr-6 text-lg font-medium text-blue-800">{question}</span>
		<div
			class={`h-6 w-6 flex-shrink-0 rounded-full ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'} flex items-center justify-center transition-all duration-300`}
		>
			<svg
				class={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
				></path>
			</svg>
		</div>
	</button>

	{#if isOpen}
		<div
			id="faq-answer"
			class="animate-fade-in border-t border-gray-100 bg-white px-5 py-4"
			transition:slide={{ duration: 300, easing: cubicOut }}
		>
			<p class="leading-relaxed text-gray-700">
				{@html formatAnswer(answer)}
			</p>
		</div>
	{/if}
</div>
