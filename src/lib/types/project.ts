export interface Project {
	title: string;
	description: string;
	role: string;
	status: 'Completed' | 'In Progress' | 'Maintenance' | 'Disconnected';
	demoUrl?: string;
	githubUrl?: string;
	imageUrl?: string;
	technologies: string[];
}
