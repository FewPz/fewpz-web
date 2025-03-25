<script lang="ts">
    export let src = "";
    export let alt = "";
    export let isOpen = false;
    
    function closeModal() {
      isOpen = false;
    }
    
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeModal();
      }
    }
  </script>
  
  <svelte:window on:keydown={handleKeydown} />
  
  {#if isOpen}
    <div 
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      on:click={closeModal}
    >
      <div class="relative max-w-4xl max-h-full">
        <button 
          class="absolute top-0 right-0 mt-2 mr-2 text-white bg-black bg-opacity-50 rounded-full p-2"
          on:click|stopPropagation={closeModal}
          aria-label="Close modal"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <img {src} {alt} class="max-w-full max-h-[90vh] object-contain" on:click|stopPropagation={() => {}} />
      </div>
    </div>
  {/if}