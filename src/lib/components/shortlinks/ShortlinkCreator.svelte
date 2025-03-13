<!-- ShortlinkCreator.svelte -->
<script lang="ts">
	import qrcode from 'qrcode-generator';
	import { onMount } from 'svelte';
	import { toast, Toaster } from 'svelte-sonner';
	import { QrCode, Link, ClipboardCopy, BarChart } from 'lucide-svelte';

	// Form data
	let hypertext_reference_link = '';
	let slug_name = '';
	let note = '';

	// UI state
	let qrCodeDataUrl = '';
	let isSubmitting = false;
	let error = '';
	let showQRCode = false;

	// Generate a random slug
	function generateSlug() {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let result = '';
		for (let i = 0; i < 6; i++) {
			result += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		slug_name = result;
		toast.success('Random slug generated!');
	}

	// Generate QR code
	async function generateQRCode(url: string) {
		try {
			const qr = qrcode(0, 'L'); // Type 0, Low error correction
			qr.addData(url);
			qr.make();

			qrCodeDataUrl = qr.createDataURL(5, 10); // 5 = module size, 10 = margin
			showQRCode = true;
		} catch (err) {
			console.error(err);
			toast.error('Failed to generate QR code');
		}
	}

	// Handle form submission
	async function handleSubmit() {
		isSubmitting = true;
		error = '';

		// Validate form
		if (!hypertext_reference_link) {
			error = 'URL is required';
			toast.error('URL is required');
			isSubmitting = false;
			return;
		}

		if (!slug_name) {
			error = 'Shortlink name is required';
			toast.error('Shortlink name is required');
			isSubmitting = false;
			return;
		}

		try {
			// Submit to our backend API
			toast.loading('Creating shortlink...');
			
			const response = await fetch('/api/shortlinks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					hypertext_reference_link,
					slug_name,
					note
				}),
			});
			
			toast.dismiss();
			
			const data = await response.json();
			
			if (!response.ok) {
				throw new Error(data.error || 'Failed to create shortlink');
			}

			// Generate QR code with the shortlink URL
			const shortlinkUrl = `https://fewpz.xyz/${slug_name}`;
			await generateQRCode(shortlinkUrl);

			toast.success('Shortlink created successfully!');
		} catch (err) {
			console.error(err);
			toast.error(err instanceof Error ? err.message : 'Failed to create shortlink');
		} finally {
			isSubmitting = false;
		}
	}

	// Copy shortlink to clipboard
	function copyToClipboard() {
		navigator.clipboard
			.writeText(`https://fewpz.xyz/${slug_name}`)
			.then(() => {
				toast.success('Copied to clipboard!');
			})
			.catch((err) => {
				console.error('Failed to copy: ', err);
				toast.error('Failed to copy to clipboard');
			});
	}
</script>

<Toaster position="top-right" richColors closeButton />

<div class="mx-auto w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-lg">
	<div class="bg-primary p-6">
		<div class="flex items-center justify-center space-x-2">
			<QrCode size={32} color="white" strokeWidth={2} />
			<h1 class="text-2xl font-bold text-white">Shortlink Creator</h1>
		</div>
	</div>

	<div class="p-6">
		{#if error}
			<div class="mb-4 rounded border border-red-400 bg-red-100 p-3 text-red-700">
				{error}
			</div>
		{/if}

		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<div>
				<label class="mb-2 block text-sm font-medium text-gray-700" for="hypertext_reference_link">
					URL *
				</label>
				<div class="flex items-center rounded-md border border-gray-300 focus-within:ring-2 focus-within:ring-primary">
					<Link class="ml-3 text-gray-400" size={18} />
					<input
						class="w-full rounded-md border-0 p-3 focus:outline-none"
						id="hypertext_reference_link"
						name="hypertext_reference_link"
						type="url"
						placeholder="https://example.com/long-url-to-be-shortened"
						bind:value={hypertext_reference_link}
						required
					/>
				</div>
			</div>

			<div>
				<label class="mb-2 block text-sm font-medium text-gray-700" for="slug_name">
					Custom Shortlink (Optional)
				</label>
				<div class="flex">
					<div class="flex-grow">
						<div class="flex rounded-md shadow-sm">
							<span
								class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
							>
								fewpz.xyz/
							</span>
							<input
								class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-gray-300 px-3 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm"
								id="slug_name"
								name="slug_name"
								type="text"
								placeholder="custom-name"
								bind:value={slug_name}
							/>
						</div>
					</div>
					<button
						type="button"
						class="ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
						on:click={generateSlug}
					>
						Generate
					</button>
				</div>
			</div>

			<div>
				<label class="mb-2 block text-sm font-medium text-gray-700" for="note">
					Note (Optional)
				</label>
				<textarea
					class="w-full rounded border border-gray-300 p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
					id="note"
					name="note"
					rows="3"
					placeholder="Add a note about this shortlink"
					bind:value={note}
				></textarea>
			</div>

			<div class="flex justify-end">
				<button
					type="submit"
					class="flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					disabled={isSubmitting}
				>
					<QrCode size={18} />
					{isSubmitting ? 'Creating...' : 'Create Shortlink'}
				</button>
			</div>
		</form>

		{#if showQRCode}
			<div class="mt-8 border-t pt-6">
				<h2 class="mb-4 text-lg font-medium text-gray-900">Your Shortlink</h2>

				<div
					class="flex flex-col items-center justify-between rounded-lg bg-gray-50 p-4 md:flex-row"
				>
					<div class="mb-4 flex-1 md:mb-0">
						<p class="mb-1 text-sm text-gray-500">Shortlink URL:</p>
						<div class="flex items-center">
							<span class="mr-2 font-medium">https://fewpz.xyz/{slug_name}</span>
							<button
								type="button"
								class="text-primary hover:text-primary-dark"
								on:click={copyToClipboard}
								aria-label="Copy to clipboard"
							>
								<ClipboardCopy size={18} />
							</button>
						</div>

						{#if note}
							<p class="mt-2 text-sm text-gray-500">Note: {note}</p>
						{/if}
					</div>

					<div class="flex-shrink-0">
						{#if qrCodeDataUrl}
							<img src={qrCodeDataUrl} alt="QR Code" class="h-32 w-32" />
						{/if}
					</div>
				</div>

				<div class="mt-4 text-center">
					<a href="#" class="flex items-center justify-center gap-1 font-medium text-primary hover:underline">
						<BarChart size={16} />
						View Analytics
					</a>
				</div>
			</div>
		{/if}
	</div>
</div>