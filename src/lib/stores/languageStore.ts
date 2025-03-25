// src/lib/stores/languageStore.ts
import { writable } from 'svelte/store';
import type { Language } from '$lib/types/types';
import { browser } from '$app/environment';

// Initialize with browser's language or default to English
const initialLanguage: Language = browser 
  ? ((localStorage.getItem('language') as Language) || 
    (navigator.language.startsWith('th') ? 'th' : 'en'))
  : 'en';

// Create the store
export const language = writable<Language>(initialLanguage);

// Subscribe to changes and update localStorage
if (browser) {
  language.subscribe(value => {
    localStorage.setItem('language', value);
  });
}