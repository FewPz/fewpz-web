export interface Education {
	school: string;
	degree: string;
	field: string;
	startYear: number;
	endYear: number | 'Present';
	logo?: string;
	achievements?: string[];
}
