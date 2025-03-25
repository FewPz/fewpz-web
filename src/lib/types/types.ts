export type Language = 'th' | 'en';

export interface SubStep {
  text: string;
}

export interface InstallationStep {
  step: number;
  title: {
    th: string;
    en: string;
  };
  description: {
    th: string;
    en: string;
  };
  subSteps?: {
    th: string[];
    en: string[];
  };
  image?: string;
}

export interface Translation {
  header: {
    title: string;
    subtitle: string;
  };
  introduction: {
    title: string;
    description: string;
  };
  installationSteps: {
    title: string;
  };
  notes: {
    title: string;
    items: string[];
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  footer: {
    copyright: string;
    developer: string;
  };
  languageSelector: {
    label: string;
    options: {
      th: string;
      en: string;
    };
  };
}

export interface Translations {
  [key: string]: Translation;
}