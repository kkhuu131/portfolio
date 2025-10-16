export type ExperienceItem = {
	title: string;
	company: string;
	period: string;
	image: string;
	description: string[];
};

export type EducationItem = {
	degree: string;
	institution: string;
	image: string;
	gpa: string;
	courses: string[];
	period: string;
};

export const experiences: ExperienceItem[] = [
	{
		title: 'Software Engineer',
		company: 'Stealth Startup',
		period: 'Jun 2025 - Current',
		image: '/stealthstartup.png',
		description:
			['Architected an AI-powered document retrieval and reasoning platform that matches users to eligible firms',
'Implemented a RAG pipeline using FastAPI and OpenAI models to deliver responses based on 200+ documents',
'Built data ingestion pipelines for policy documents, including semantic chunking and vector embeddings',
'Developed a custom scoring and ranking engine to evaluate firm eligibility using multi-factor criteria',
'Collaborated with domain experts to translate complex rules into testable system logic.']
},
{
		title: 'Software Engineer',
		company: 'StudioTuko',
		period: 'Jan 2024 - Feb 2025',
		image: '/studiotuko.png',
		description:
			['Shipped end-to-end features across prototype games and web applications in a startup environment',
'Built gameplay mechanics and developer tools in Godot, integrating backend services where needed',
'Designed and implemented web applications using React and Vue, focusing on clean UI and performance']
	},
	// {
	// 	title: 'Software Engineer - AI Training',
	// 	company: 'DataAnnotation',
	// 	period: 'Jun 2024 - Jan 2025 · 6 months',
	// 	image: '/dataannotation.png',
	// 	description:
	// 		"At DataAnnotation, I collaborated on AI training projects by providing feedback and improving machine learning model outputs. I applied software engineering practices to test and optimize tasks in Python, React, and Javascript."
	// },
	
];

export const education: EducationItem[] = [
	{
		degree: 'Master of Science in Computer Science',
		institution: 'University of Texas at Austin',
		image: '/uta.png',
		gpa: '4.0',
		courses: ['Deep Learning', 'Reinforcement Learning', 'Advances in Deep Learning', 'Machine Learning', 'Natural Language Processing'],
		period: 'Jan 2025 - Aug 2026'
	},
	{
		degree: 'Bachelor of Science in Computer Science',
		institution: 'University of Washington',
		image: '/uw.png',
		gpa: '3.93 - Cum Laude',
		courses: ['Data Structures and Algorithms', 'Operating Systems', 'Distributed Systems', 'Datacenter Systems', 'Database Management', 'Artificial Intelligence', 'Computer Vision'],
		period: 'Sep 2021 - Dec 2023'
	}
];


