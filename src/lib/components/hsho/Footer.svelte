<script lang="ts">
	import { language } from '$lib/i18n/i18n-store';
	import { translations } from '$lib/i18n/translations';

	$: t = translations[$language];
</script>

<footer class="mt-12 bg-gray-800 p-6 text-gray-300">
	<div class="container mx-auto">
		<p>Made 🔥 by Kunseru, _paper, FewPz</p>
	</div>
</footer>
