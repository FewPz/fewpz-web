import type { Education } from '$lib/types/education';

export const educationData: Education[] = [
	{
		school: "King Mongkut's Institute of Technology Ladkrabang (KMITL)",
		degree: 'Bachelor of Science',
		field: 'Information Technology (Software Engineering)',
		startYear: 2022,
		achievements: [
			'1st Runner-up National Round in Huawei ICT Competition 2024-2025',
			'Qualified in the National Round of Huawei ICT Competition 2024-2025',
			'Published Relationship of SMO ITKMITL 2566',
			'Head of Pre-Programming 2566 at ITKMITL',
			'Vice Head of ITCAMP20 at ITKMITL',
			'Vice President of IT20'
		],
		logo: 'itkmitl.png',
		endYear: 'Present'
	},
	{
		school: 'Mahavajiravudh Changwat Songkhla School',
		degree: 'Langauge of Arts',
		field: 'English-Korean-Japanese',
		startYear: 2019,
		endYear: 2022,
		logo: 'mvsk.png',
		gpa: 3.33,
		achievements: [
			'Grand Prize in Robotics Competition at IDE Online Openhouse 2022',
			'President of Comptuer MVSK Club',
			'Head of E-Sport Tournament (Call of Duty Moblie) at MVSK Openhouse 2020'
		]
	}
];
