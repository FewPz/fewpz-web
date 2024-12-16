import type { Education } from '$lib/types/education';

export const educationData: Education[] = [
	{
		school: "King Mongkut's Institute of Technology Ladkrabang (KMITL)",
		degree: 'Bachelor of Science',
		field: 'Information Technology (Software Engineering)',
		startYear: 2022,
		achievements: ['Published Relationship of SMO ITKMITL 2566', 'Vice President of IT20'],
		endYear: 'Present'
	},
	{
		school: "Mahavajiravudh Changwat Songkhla School",
		degree: 'Langauge of Arts',
		field: 'English-Korean-Japanese',
		startYear: 2019,
		endYear: 2022,
		achievements: [
			'1st Place in Robotics Competition at IDE Online Openhouse 2022',
			'Vice President of Comptuer MVSK Club',
			'Head of E-Sport Tournament (Call of Duty Moblie) at MVSK Openhouse 2020',	
		]
	}
];
