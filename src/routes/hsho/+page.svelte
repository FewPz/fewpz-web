<script lang="ts">
	import { language } from '$lib/i18n/i18n-store';
	import { translations, installationSteps } from '$lib/i18n/translations';
	import Header from '$lib/components/hsho/Header.svelte';
	import Notification from '$lib/components/hsho/Notification.svelte';
	import InstallationStep from '$lib/components/hsho/InstallationStep.svelte';

	$: t = translations[$language];

	// By default, all steps are expanded
	let expandedSteps = installationSteps.reduce(
		(acc, step) => {
			acc[step.step] = true;
			return acc;
		},
		{} as Record<number, boolean>
	);
</script>

<div class="flex min-h-screen flex-col bg-gray-100">
	<Header />

	<main class="container mx-auto flex-grow p-6">
		<div class="mb-8 rounded-lg bg-white p-6 shadow-md">
			<div class="prose max-w-none">
				<h2 class="mb-4 text-2xl font-bold text-blue-800">{t.introduction.title}</h2>
				<p class="mb-4">{t.introduction.description}</p>
			</div>
		</div>

		<Notification
			type="warning"
			message={$language === 'th'
				? 'คำเตือน: โปรแกรมนี้ไม่ได้รับการรับรองจากผู้พัฒนาเกม Home Sweet Home Online อย่างเป็นทางการ'
				: 'Warning: This program is not officially endorsed by the developers of Home Sweet Home Online'}
		/>

		<div class="rounded-lg bg-white p-6 shadow-md">
			<h2 class="mb-6 text-2xl font-bold text-blue-800">{t.installationSteps.title}</h2>

			<div class="space-y-8">
				{#each installationSteps as step}
					<InstallationStep {step} expanded={expandedSteps[step.step]} />
				{/each}
			</div>
		</div>
	</main>
</div>
