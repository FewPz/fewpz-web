import type { Project } from '$lib/types/project';

export const projectsData: Project[] = [
	{
		title: 'Captive Portal - ITKMITL Authentication Internet Service',
		description:
			"Developed a faculty-funded captive portal for ITKMITL Authentication Internet Services login using LDAP, designed for students, lecturers, and staff. Enhanced system performance by leveraging the SvelteKit framework with Server-Side Rendering (SSR). The system is actively used by users in the School of Information Technology at King Mongkut's Institute of Technology Ladkrabang",
		role: 'Fullstack Software Developer and UX/UI Design',
		demoUrl: 'https://portal.it.kmitl.ac.th/',
		status: 'Completed',
		technologies: ['SvelteKit', 'LDAP', 'Google Authencation', 'Fortigate']
	},
	{
		title: '<i>Judge - Online Code Judging System (V.1)',
		description:
			"Developed a faculty-funded online judge system for competitive programming, supporting Python, C, C++, Scala, and Raptor (Flowchart), with plans for future expansion. Built using the Next.js framework and a REST API with Express, The system is actively used by 350 students in the School of Information Technology at King Mongkut's Institute of Technology Ladkrabang",
		role: 'Fullstack Software Developer and Project Manager',
		status: 'Completed',
		demoUrl: 'https://ijudge.it.kmitl.ac.th/',
		technologies: [
			'JavaScript',
			'TypeScript',
			'Next.js',
			'NodeJS',
			'Express',
			'MySQL',
			'Docker',
			'Nginx',
			'Jenkins',
			'GitHub'
		]
	},
	{
		title: 'J:Learn - Online Structural Validate-based System (V.3)',
		description:
			"Designed and developed a faculty-funded online validation structure system supporting Java, with a mockup of a user-friendly and responsive user interface (UI) for both student and lecturer applications using Figma. Rewrote the grading validation system for improved performance by leveraging the Next.js framework and a REST API built with Node.js and Express. The system is actively used by 210 students in the School of Information Technology at King Mongkut's Institute of Technology Ladkrabang",
		role: 'UX/UI Design and Back-End Software Developer',
		status: 'Completed',
		demoUrl: 'https://jlearn.it.kmitl.ac.th/',
		technologies: ['JavaScript', 'TypeScript', 'Next.js', 'Express', 'Figma']
	},
	{
		title: 'TA Mirai - Regis Online Teaching Assistant System',
		description: "N/A",
		role: 'Fullstack Software Developer',
		status: 'Disconnected',
		technologies: ['PHP', 'MySQL', 'LDAP', 'Django', 'Docker', 'Jenkins']
	}
];
