export type ExperienceItem = {
	title: string;
	company: string;
	period: string;
	image: string;
	description: string;
};

export type EducationItem = {
	degree: string;
	institution: string;
	image: string;
	period: string;
};

export const experiences: ExperienceItem[] = [
	{
		title: 'Software Engineer - AI Training',
		company: 'DataAnnotation',
		period: 'Jun 2024 - Jan 2025 · 6 months',
		image: '/dataannotation.png',
		description:
			"At DataAnnotation, I collaborated on AI training projects by providing feedback and improving machine learning model outputs. I applied software engineering practices to test and optimize tasks in Python, React, and Javascript."
	},
	{
		title: 'Software Developer',
		company: 'StudioTuko',
		period: 'Jan 2024 - Current · 1 year 2 months',
		image: '/studiotuko.png',
		description:
			'At StudioTuko, I lead a small team of developers to develop and publish an indie game. I designed and implemented game mechanics and systems, and worked on the UI/UX design.'
	}
];

export const education: EducationItem[] = [
	{
		degree: 'Master of Science in Computer Science',
		institution: 'University of Texas at Austin',
		image: '/uta.png',
		period: 'Jan 2025 - Aug 2026'
	},
	{
		degree: 'Bachelor of Science in Computer Science',
		institution: 'University of Washington',
		image: '/uw.png',
		period: 'Sep 2021 - Dec 2023'
	}
];


