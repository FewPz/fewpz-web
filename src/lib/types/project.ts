export interface Project {
	title: string;
	description: string;
	role: string;
	status: 'Completed' | 'In Progress' | 'Maintenance';
	demoUrl?: string;
	githubUrl?: string;
	imageUrl?: string;
	technologies: string[];
}
