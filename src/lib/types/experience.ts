export interface Experience {
	company: string;
	position: string;
	location: string;
	startDate: string;
	endDate: string | 'Present';
	description: string;
	responsibilities: string[];
	technologies: string[];
	companyLogo?: string;
}
