import { writable } from 'svelte/store';
import type { Language } from '$lib/types/types';

// Try to get language from localStorage, fallback to 'th'
const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const storedLang = localStorage.getItem('language');
    if (storedLang === 'en' || storedLang === 'th') {
      return storedLang;
    }
  }
  return 'th'; // Default to Thai
};

// Create the language store
export const language = writable<Language>(getInitialLanguage());

// Update language and save to localStorage
export const setLanguage = (lang: Language) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
  language.set(lang);
};