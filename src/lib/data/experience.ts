import type { Experience } from '$lib/types/experience';

export const experienceData: Experience[] = [
	{
		company: 'Smilekrub Network',
		position: 'Game Developer',
		location: 'BKK, Thailand',
		startDate: 'Jan 2022',
		endDate: 'Present',
		description:
			'Smilekrub Network is a game development group specializing in creating custom game modes and plugins for Minecraft servers.',
		responsibilities: [
			'Develop and maintain custom game modes and plugins',
			'Design and implement new gameplay features and mechanicss',
			'Work with Spigot, Paper, and CraftBukkit APIs to create server modifications',
			'Handle NMS (Net.Minecraft.Server) implementations for custom server features',
			'Monitor server performance and implement optimizations as needed'
		],
		technologies: [
			'Minecraft',
			'Java',
			'Jenkins',
			'Spigot',
			'Paper',
			'NMS',
			'CraftBukkit',
			'Maven',
			'GitLab'
		]
	}
];
