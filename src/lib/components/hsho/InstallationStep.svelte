<script lang="ts">
    import { language } from '$lib/i18n/i18n-store';
    import type { InstallationStep } from '$lib/types/types';
	import ImageModal from './ImageModal.svelte';
    
    export let step: InstallationStep;
    export let expanded = true;
    
    let isModalOpen = false;
    
    function toggleExpand() {
      expanded = !expanded;
    }
    
    function openModal() {
      isModalOpen = true;
    }
  </script>
  
  <div class="border-l-4 border-blue-500 pl-4 pb-2">
    <div class="flex items-start">
      <div class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
        {step.step}
      </div>
      <div class="ml-4 w-full">
        <button 
          class="flex items-center justify-between w-full text-left font-bold text-xl text-blue-800"
          on:click={toggleExpand}
        >
          <span>{step.title[$language]}</span>
          <svg class={`w-5 h-5 ml-2 transform ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        {#if expanded}
          <div class="mt-3 text-gray-700">
            <p class="mb-4">{step.description[$language]}</p>
            
            {#if step.subSteps}
              <ul class="list-disc pl-5 mb-4 space-y-2">
                {#each step.subSteps[$language] as subStep}
                  <li>{subStep}</li>
                {/each}
              </ul>
            {/if}
            
            {#if step.image}
              <div class="mt-4 border rounded-lg overflow-hidden cursor-pointer" on:click={openModal} on:keydown={(e) => e.key === 'Enter' && openModal()}>
                <img src={step.image} alt={`Step ${step.step}`} class="w-full h-auto" />
                <div class="p-2 text-sm text-center text-blue-600 bg-blue-50">
                  {$language === 'th' ? 'คลิกเพื่อขยาย' : 'Click to enlarge'}
                </div>
              </div>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>
  
  <ImageModal src={step.image || ''} alt={`Step ${step.step}`} bind:isOpen={isModalOpen} />