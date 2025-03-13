<script>
  
	import ShortlinkCreator from "$lib/components/shortlinks/ShortlinkCreator.svelte";

</script>

<svelte:head>
  <title>Create Shortlink | URL Shortener</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-demibold text-gray-900">QRCode Generate</h1>
      <p class="mt-2 text-lg text-gray-600">
        Shorten URLs and generate QR codes for easy sharing
      </p>
    </div>
    <ShortlinkCreator />
  </div>
</div>