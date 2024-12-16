// src/lib/data/portfolio.ts
import { Briefcase, Award, Book, Mail, User } from 'lucide-svelte';

export interface Section {
	id: string;
	title: string;
	description: string;
	icon: typeof Briefcase | typeof Book | typeof Award | typeof User | typeof Mail;
	bgColor: string;
	content: string;
}

export const portfolioSections: Section[] = [
	{
		id: 'experience',
		title: 'Experience',
		description: 'Lorem ipsum dolor sit amet',
		icon: Briefcase,
		bgColor: 'bg-blue-600',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'
	},
	{
		id: 'education',
		title: 'Education',
		description: 'Consectetur adipiscing elit',
		icon: Book,
		bgColor: 'bg-emerald-600',
		content:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
	},
	{
		id: 'projects',
		title: 'Projects',
		description: 'Quis nostrud exercitation',
		icon: Briefcase,
		bgColor: 'bg-teal-600',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
	}
];
