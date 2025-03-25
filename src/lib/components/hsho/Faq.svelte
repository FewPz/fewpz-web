<script lang="ts">
  import { language } from '$lib/i18n/i18n-store';
  import { translations } from '$lib/i18n/translations';
  import FaqItem from './FaqItem.svelte';
  
  $: t = translations[$language];
  $: faqItems = t.faq.items;
</script>

<div class="bg-white rounded-lg shadow-md p-6 mt-8">
  <div class="flex items-center mb-6">
    <div class="mr-3 text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    </div>
    <h2 class="text-2xl font-bold text-blue-800">{t.faq.title}</h2>
  </div>
  
  <div class="space-y-3">
    {#each faqItems as item, i}
      <FaqItem 
        question={item.question} 
        answer={item.answer}
        isOpen={i === 0} 
      />
    {/each}
  </div>
</div>