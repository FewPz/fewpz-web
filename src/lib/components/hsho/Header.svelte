<script lang="ts">
	import { language } from '$lib/i18n/i18n-store';
	import { translations } from '$lib/i18n/translations';
	import LanguageSelector from './LanguageSelector.svelte';
	import { onMount } from 'svelte';
	
	$: t = translations[$language];
	
	let scrollY = 0;
	let isScrolled = false;
	let isMobileMenuOpen = false;
	
	// Handle scroll effects
	function handleScroll() {
	  scrollY = window.scrollY;
	  isScrolled = scrollY > 10;
	}
	
	// Toggle mobile menu
	function toggleMobileMenu() {
	  isMobileMenuOpen = !isMobileMenuOpen;
	}
	
	// Icon for the program
	const programIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mr-2">
	  <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"></path>
	  <path d="M12 2v20"></path>
	  <path d="M2 12h20"></path>
	</svg>`;
	
	onMount(() => {
	  window.addEventListener('scroll', handleScroll);
	  return () => {
		window.removeEventListener('scroll', handleScroll);
	  };
	});
  </script>
  
  <svelte:window on:scroll={handleScroll} />
  
  <header 
	class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-blue-900 shadow-lg py-2' : 'bg-blue-900/95 py-6'}`}
  >
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
	  <div class="flex justify-between items-center">
		<!-- Logo and Title Section -->
		<div class="flex items-center">
		  <a href="/" class="flex items-center group">
			<div class="flex-shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:scale-110">
			  {@html programIcon}
			</div>
			<div class="ml-2">
			  <h1 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
				{t.header.title}
			  </h1>
			  <p class="hidden sm:block text-blue-200 text-sm">
				{t.header.subtitle}
			  </p>
			</div>
		  </a>
		</div>
		
		<!-- Desktop Navigation -->
		<div class="hidden md:flex items-center space-x-6">
		  <nav>
			<ul class="flex items-center space-x-8">
			  <li>
				<a 
				  href="#installation" 
				  class="text-blue-100 hover:text-white transition-colors duration-200 text-sm font-medium"
				>
				  {t.installationSteps.title}
				</a>
			  </li>
			  <li>
				<a 
				  href="#faq" 
				  class="text-blue-100 hover:text-white transition-colors duration-200 text-sm font-medium"
				>
				  {t.faq.title}
				</a>
			  </li>
			</ul>
		  </nav>
		  
		  <div class="h-6 w-px bg-blue-700"></div>
		  
		  <LanguageSelector />
		</div>
		
		<!-- Mobile Menu Button -->
		<button 
		  class="md:hidden text-white focus:outline-none" 
		  on:click={toggleMobileMenu}
		  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
		  aria-expanded={isMobileMenuOpen}
		>
		  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			{#if isMobileMenuOpen}
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			{:else}
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			{/if}
		  </svg>
		</button>
	  </div>
	  
	  <!-- Mobile Menu -->
	  {#if isMobileMenuOpen}
		<div class="md:hidden mt-4 pb-4 animate-fade-in">
		  <nav class="flex flex-col space-y-3">
			<a 
			  href="#installation" 
			  class="text-blue-100 hover:text-white transition-colors duration-200 font-medium p-2 rounded-md hover:bg-blue-800"
			  on:click={() => isMobileMenuOpen = false}
			>
			  {t.installationSteps.title}
			</a>
			<a 
			  href="#faq" 
			  class="text-blue-100 hover:text-white transition-colors duration-200 font-medium p-2 rounded-md hover:bg-blue-800"
			  on:click={() => isMobileMenuOpen = false}
			>
			  {t.faq.title}
			</a>
			<div class="pt-2 border-t border-blue-800">
			  <LanguageSelector />
			</div>
		  </nav>
		</div>
	  {/if}
	</div>
  </header>
  
  <!-- Spacer to compensate for fixed header -->
  <div class={`${isScrolled ? 'h-16' : 'h-24'} transition-all duration-300`}></div>