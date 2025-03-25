<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  // Language variables
  type Language = 'th' | 'en';
  let currentLanguage: Language = 'en';
  
  // Translations
  const translations = {
    th: {
      title: 'รอเวลา',
      hours: 'ชั่วโมง',
      minutes: 'นาที',
      seconds: 'วินาที',
      timeLeft: 'เหลือเวลาอีกไม่นาน',
      warning: 'ราตรีกำลังมา',
      timeUp: 'นิวรณ์เปิดแล้ว',
      spiritText: 'พิภพแตก',
      switchLang: 'EN'
    },
    en: {
      title: 'TIME REMAINS',
      hours: 'HOURS',
      minutes: 'MINS',
      seconds: 'SECS',
      timeLeft: 'not much time left',
      warning: 'SHE IS COMING',
      timeUp: 'NIWARN IS OPEN',
      spiritText: 'THE RIFT',
      switchLang: 'ไทย'
    }
  };
  
  // Time variables
  let hours: number = 0;
  let minutes: number = 0;
  let seconds: number = 0;
  let isTimeUp: boolean = false;
  let flickerEffect: boolean = false;
  let strongFlicker: boolean = false;
  let bloodDripActive: boolean = false;
  let ghostVisible: boolean = false;
  let heartbeatIntensity: number = 1;
  let interval: NodeJS.Timeout | undefined;
  
  // Toggle language
  function toggleLanguage(): void {
    currentLanguage = currentLanguage === 'th' ? 'en' : 'th';
  }
  
  // Calculate time until 4:00 PM in Thai timezone
  function calculateTimeRemaining(): void {
    // Create target time at 16:00 (4:00 PM) in Thai timezone (UTC+7)
    const now: Date = new Date();
    const targetTime: Date = new Date(now);
    
    // Set target to 4:00 PM
    targetTime.setHours(16, 0, 0, 0);
    
    // If it's already past 4:00 PM, set target to tomorrow
    if (now >= targetTime) {
      targetTime.setDate(targetTime.getDate() + 1);
    }
    
    // Calculate time difference in milliseconds
    const diff: number = targetTime.getTime() - now.getTime();
    
    if (diff <= 0) {
      isTimeUp = true;
      hours = 0;
      minutes = 0;
      seconds = 0;
      return;
    }
    
    // Convert to hours, minutes, seconds
    hours = Math.floor(diff / (1000 * 60 * 60));
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Increase horror effects as we get closer to deadline
    const totalSecondsLeft = hours * 3600 + minutes * 60 + seconds;
    if (totalSecondsLeft < 3600) { // Last hour
      heartbeatIntensity = 3 - (totalSecondsLeft / 3600) * 2;
    }
  }
  
  // Format with leading zeros
  function formatTime(value: number): string {
    return value.toString().padStart(2, '0');
  }
  
  // Flicker effect for horror theme
  function startFlickerEffect(delay?: number): void {
    setTimeout(() => {
      flickerEffect = true;
      // Random chance of stronger flicker
      strongFlicker = Math.random() > 0.7;
      
      setTimeout(() => {
        flickerEffect = false;
        strongFlicker = false;
        
        // Shorter intervals as we get closer to deadline
        let nextFlicker: number;
        if (hours === 0 && minutes < 30) {
          nextFlicker = Math.random() * 3000 + 500; // More frequent in last 30 minutes
        } else {
          nextFlicker = Math.random() * 7000 + 1000;
        }
        
        if (!isTimeUp) startFlickerEffect(nextFlicker);
      }, strongFlicker ? 350 : 150);
    }, delay || Math.random() * 5000 + 2000);
  }
  
  // Random blood drip animation
  function startBloodDripAnimation(): void {
    setTimeout(() => {
      bloodDripActive = true;
      
      setTimeout(() => {
        bloodDripActive = false;
        
        // Random interval between animations
        const nextDrip = Math.random() * 15000 + 10000;
        if (!isTimeUp) startBloodDripAnimation();
      }, 6000); // Blood stays for 6 seconds
    }, Math.random() * 20000 + 5000);
  }
  
  // Ghost appearance
  function startGhostAnimations(): void {
    setTimeout(() => {
      ghostVisible = true;
      
      setTimeout(() => {
        ghostVisible = false;
        
        // Random long interval between ghost appearances
        const nextGhost = Math.random() * 40000 + 20000;
        if (!isTimeUp) startGhostAnimations();
      }, 2000); // Ghost visible for 2 seconds
    }, Math.random() * 30000 + 30000); // First ghost appears between 30-60 seconds
  }
  
  onMount(() => {
    // Initialize timer
    calculateTimeRemaining();
    
    // Start countdown
    interval = setInterval(() => {
      calculateTimeRemaining();
      
      // Horror effects intensify as countdown approaches zero
      if (hours === 0 && minutes < 10 && !isTimeUp) {
        // Increase flicker frequency when close to target time
        startFlickerEffect(Math.random() * 2000 + 500);
      }
    }, 1000);
    
    // Start horror effects
    startFlickerEffect();
    startBloodDripAnimation();
    startGhostAnimations();
  });
  
  onDestroy(() => {
    if (interval) clearInterval(interval);
  });
</script>

<svelte:head>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700&family=Sarabun:wght@400;700&family=Cinzel:wght@500;700&display=swap" rel="stylesheet">
</svelte:head>

<!-- Main container with background and effects -->
<div 
  class={`relative flex flex-col justify-center items-center w-full h-screen bg-black bg-cover bg-center transition-all duration-300 overflow-hidden ${flickerEffect ? 'flicker' : ''} ${strongFlicker ? 'strong-flicker' : ''} ${isTimeUp ? 'time-up' : ''}`}
  style="background-image: url('bg_HSHO_Thumbnail_Poster_v000_web_copy_2.jpg');">
  
  <!-- Overlay and vignette effects -->
  <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 pointer-events-none"></div>
  <div class="absolute inset-0 vignette pointer-events-none"></div>
  
  <!-- Ghost element -->
  {#if ghostVisible}
    <div class="ghost absolute w-24 h-36 top-1/5 right-1/10 z-30 opacity-0"></div>
  {/if}
  
  <!-- Blood drips -->
  {#if bloodDripActive}
    <div class="absolute inset-0 pointer-events-none z-20">
      <div class="blood-drip drip1 absolute top-0 left-3/10 w-5 h-44"></div>
      <div class="blood-drip drip2 absolute top-0 left-1/2 w-5 h-52"></div>
      <div class="blood-drip drip3 absolute top-0 left-3/4 w-5 h-40"></div>
    </div>
  {/if}
  
  <!-- Language toggle button -->
  <button 
    class="absolute top-5 right-5 bg-black bg-opacity-70 text-white text-opacity-70 border border-red-500 border-opacity-30 px-4 py-2 rounded transition-all duration-300 hover:bg-opacity-80 hover:text-opacity-90 hover:border-opacity-60 hover:shadow-red z-50 text-sm"
    on:click={toggleLanguage}>
    {translations[currentLanguage].switchLang}
  </button>
  
  <!-- Main content box -->
  <div 
    class="relative z-10 text-center text-white max-w-xl w-11/12 p-10 bg-black bg-opacity-70 rounded border border-red-800 border-opacity-30 overflow-hidden"
    style="--heartbeat-intensity: {heartbeatIntensity}; text-shadow: 0 0 10px #f00, 0 0 20px #900; box-shadow: 0 0 20px rgba(255, 0, 0, 0.5), inset 0 0 15px rgba(255, 0, 0, 0.3);"
    class:heartbeat={true}>
    
    <div class="absolute top-2 right-2 text-white text-opacity-30 transform rotate-6 tracking-widest text-sm font-sarabun">
      {translations[currentLanguage].spiritText}
    </div>
    
    <h1 class="text-4xl md:text-5xl font-bold tracking-wider uppercase mb-8">
      {translations[currentLanguage].title}<span class="title-drop text-red-600">...</span>
    </h1>
    
    {#if !isTimeUp}
      <div class="ancient-symbol mx-auto mb-6 w-20 h-20"></div>
      
      <div class="relative flex justify-center items-center text-3xl md:text-4xl mb-8">
        <div class="countdown-border absolute inset-0 -m-2 border border-red-500 border-opacity-20 rounded pointer-events-none"></div>
        
        <div class="flex flex-col items-center">
          <span class="text-5xl md:text-6xl font-bold time-value">{formatTime(hours)}</span>
          <span class="text-xs md:text-sm text-gray-400 mt-1">{translations[currentLanguage].hours}</span>
        </div>
        
        <div class="mx-4 text-5xl md:text-6xl text-red-600 time-separator">:</div>
        
        <div class="flex flex-col items-center">
          <span class="text-5xl md:text-6xl font-bold time-value">{formatTime(minutes)}</span>
          <span class="text-xs md:text-sm text-gray-400 mt-1">{translations[currentLanguage].minutes}</span>
        </div>
        
        <div class="mx-4 text-5xl md:text-6xl text-red-600 time-separator">:</div>
        
        <div class="flex flex-col items-center">
          <span class="text-5xl md:text-6xl font-bold time-value">{formatTime(seconds)}</span>
          <span class="text-xs md:text-sm text-gray-400 mt-1">{translations[currentLanguage].seconds}</span>
        </div>
      </div>
      
      <div class="text-sm md:text-base text-gray-400 mt-4 tracking-wide">
        {translations[currentLanguage].timeLeft}<span class="ellipsis">...</span>
      </div>
      
      <div class="warning text-lg md:text-xl text-red-600 font-bold mt-6 tracking-wider opacity-70">
        {translations[currentLanguage].warning}
      </div>
    {:else}
      <div class="time-up-message text-4xl md:text-5xl text-red-600 font-bold mb-8 tracking-widest">
        {translations[currentLanguage].timeUp}<span class="blink">...</span>
      </div>
      <div class="ritual-symbol mx-auto w-28 h-28"></div>
    {/if}
    
    <div class="scratch-marks absolute bottom-0 right-0 w-24 h-14 opacity-50"></div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #000;
    overflow: hidden;
    font-family: 'Kanit', sans-serif;
  }
  
  .vignette {
    box-shadow: inset 0 0 150px 60px rgba(0, 0, 0, 0.8);
  }
  
  .ghost {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150"><path d="M50,0 C30,0 20,20 20,40 L20,120 C20,120 10,150 0,150 L100,150 C90,150 80,120 80,120 L80,40 C80,20 70,0 50,0 Z" fill="rgba(255,255,255,0.15)"/><circle cx="35" cy="50" r="8" fill="black"/><circle cx="65" cy="50" r="8" fill="black"/><path d="M30,80 Q50,100 70,80" stroke="black" fill="none" stroke-width="2"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    animation: ghost-float 2s ease-in-out;
  }
  
  .blood-drip {
    background-color: #8a0303;
    border-radius: 0 0 10px 10px;
    filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.7));
    animation: blood-drip 6s ease-in forwards;
    opacity: 0.9;
  }
  
  .drip1 {
    animation-delay: 0.5s;
  }
  
  .drip2 {
    animation-delay: 0s;
  }
  
  .drip3 {
    animation-delay: 1.2s;
  }
  
  .heartbeat {
    animation: heartbeat calc(1.5s / var(--heartbeat-intensity)) infinite;
  }
  
  .title-drop {
    animation: dripping 2s infinite;
  }
  
  .time-separator {
    animation: pulse 1s infinite;
    text-shadow: 0 0 10px #f00;
  }
  
  .warning {
    animation: warning-pulse 3s infinite;
  }
  
  .time-up-message {
    animation: flicker 0.3s infinite;
  }
  
  .blink {
    animation: blink 0.5s infinite;
  }
  
  .ellipsis {
    animation: ellipsis 2s infinite;
  }
  
  .ancient-symbol {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="rgba(255,0,0,0.8)" stroke-width="2" fill="none"/><circle cx="50" cy="50" r="30" stroke="rgba(255,0,0,0.6)" stroke-width="1" fill="none"/><line x1="50" y1="10" x2="50" y2="90" stroke="rgba(255,0,0,0.8)" stroke-width="1"/><line x1="10" y1="50" x2="90" y2="50" stroke="rgba(255,0,0,0.8)" stroke-width="1"/><path d="M50,20 Q70,40 50,60 Q30,40 50,20" fill="rgba(255,0,0,0.3)"/></svg>');
    opacity: 0.7;
    filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.5));
  }
  
  .ritual-symbol {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,10 61,40 95,40 67,60 79,90 50,70 21,90 33,60 5,40 39,40" stroke="rgba(255,0,0,0.9)" stroke-width="2" fill="none"/><circle cx="50" cy="50" r="20" stroke="rgba(255,0,0,0.9)" stroke-width="1" fill="none"/><circle cx="50" cy="50" r="5" fill="rgba(255,0,0,0.9)"/></svg>');
    opacity: 0.8;
    filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.7));
    animation: slow-spin 10s linear infinite;
  }
  
  .scratch-marks {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><path d="M10,10 L90,50" stroke="rgba(255,255,255,0.2)" stroke-width="2"/><path d="M15,5 L95,45" stroke="rgba(255,255,255,0.2)" stroke-width="2"/><path d="M20,0 L100,40" stroke="rgba(255,255,255,0.2)" stroke-width="2"/></svg>');
  }
  
  .flicker {
    filter: brightness(0.3);
    transition: filter 0.1s;
  }
  
  .strong-flicker {
    filter: brightness(0.1);
    transition: filter 0.05s;
  }
  
  .time-up {
    animation: shake 0.3s infinite;
    filter: sepia(0.5) hue-rotate(-20deg) saturate(1.5);
  }
  
  .font-sarabun {
    font-family: 'Sarabun', sans-serif;
  }
  
  .font-cinzel {
    font-family: 'Cinzel', serif;
  }
  
  .time-value {
    text-shadow: 0 0 15px #f00, 0 0 30px #600;
  }
  
  .shadow-red {
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
  }
  
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.3; }
    100% { opacity: 1; }
  }
  
  @keyframes warning-pulse {
    0% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
    100% { opacity: 0.7; transform: scale(1); }
  }
  
  @keyframes flicker {
    0% { opacity: 1; }
    25% { opacity: 0.5; }
    50% { opacity: 0.8; }
    75% { opacity: 0.2; }
    100% { opacity: 1; }
  }
  
  @keyframes shake {
    0% { transform: translateX(0) translateY(0); }
    25% { transform: translateX(5px) translateY(2px); }
    50% { transform: translateX(-5px) translateY(-1px); }
    75% { transform: translateX(5px) translateY(-2px); }
    100% { transform: translateX(0) translateY(0); }
  }
  
  @keyframes blink {
    0% { opacity: 1; }
    49% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 0; }
  }
  
  @keyframes ellipsis {
    0% { opacity: 0.3; }
    33% { opacity: 1; }
    66% { opacity: 0.3; }
    100% { opacity: 0.3; }
  }
  
  @keyframes blood-drip {
    0% { transform: translateY(-100%); opacity: 0; }
    5% { transform: translateY(0); opacity: 0.9; }
    90% { transform: translateY(calc(100vh - 60px)); opacity: 0.9; }
    100% { transform: translateY(calc(100vh)); opacity: 0; }
  }
  
  @keyframes ghost-float {
    0% { opacity: 0; transform: translateY(20px); }
    20% { opacity: 0.4; transform: translateY(0); }
    80% { opacity: 0.4; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-20px); }
  }
  
  @keyframes slow-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes heartbeat {
    0% { transform: scale(1); }
    5% { transform: scale(1.02); }
    10% { transform: scale(1); }
    15% { transform: scale(1.05); }
    20% { transform: scale(1); }
    100% { transform: scale(1); }
  }
  
  @keyframes dripping {
    0% { opacity: 1; text-shadow: 0 0 10px #f00, 0 0 20px #900; }
    50% { opacity: 0.7; text-shadow: 0 0 15px #f00, 0 0 30px #900; }
    100% { opacity: 1; text-shadow: 0 0 10px #f00, 0 0 20px #900; }
  }
</style>