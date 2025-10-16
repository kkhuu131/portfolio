export type ProjectItem = {
	id: number;
	title: string;
	shortDescription: string;
	description: string;
	image: string;
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
	features: string[];
	challenges: string[];
	solutions: string[];
	learnings: string[];
	role: string;
	timeline: string;
	status: 'completed' | 'in-progress' | 'archived';
};

export const projects: ProjectItem[] = [
	{
		id: 5,
		title: 'Digitask',
		shortDescription: 'Full-stack web application that combines task management with virtual pet gamification to increase user engagement and productivity.',
		description: 'Digitask is a comprehensive productivity application that gamifies task management through virtual pet interactions. Users can create and manage tasks while caring for their digital companion, which grows and evolves based on their productivity habits. The application features real-time updates, user authentication, interactive reward systems, and a responsive design that works across all devices.',
		image: '/digitask.png',
		technologies: ['React', 'Tailwind CSS', 'Node.js', 'TypeScript', 'Supabase (PostgreSQL)', 'Vercel'],
		githubUrl: 'https://github.com/kkhuu131/digitask',
		liveUrl: 'https://digitask-pi.vercel.app',
		features: [
			'Virtual pet system with feeding, playing, and evolution mechanics',
			'Task management with categories, priorities, and due dates',
			'Real-time synchronization across devices',
			'User authentication and profile management',
			'Progress tracking and statistics dashboard',
			'Responsive design for mobile and desktop',
			'Dark/light theme support'
		],
		challenges: [
			'Implementing complex state management for pet interactions',
			'Creating engaging gamification mechanics that actually motivate users',
			'Optimizing real-time updates for performance',
			'Designing an intuitive UI that balances functionality with fun'
		],
		solutions: [
			'Used React Context API and custom hooks for state management',
			'Implemented a reward system based on task completion streaks',
			'Leveraged Supabase real-time subscriptions for efficient updates',
			'Created a component-based design system for consistency'
		],
		learnings: [
			'Gamification principles and user engagement strategies',
			'Real-time web application architecture',
			'State management patterns in React applications',
			'Database design for complex user interactions'
		],
		role: 'Full-Stack Developer',
		timeline: '3 months',
		status: 'completed'
	},
	{
		id: 1,
		title: 'ValStocks',
		shortDescription: 'A full-stack stock simulation platform built with React, Next.js, Node.js, and Supabase.',
		description: 'ValStocks is a comprehensive stock market simulation platform that allows users to practice trading with virtual money. The stocks are based on real VALORANT esports teams and change prices based on real-time events and sentiments of teams. The application provides real-time stock data, portfolio management, transaction history, and educational resources. Users can trade stocks, analyze market trends and history, and compete with friends in a risk-free environment.',
		image: '/valstocks.png',
		technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Supabase', 'Vercel', 'Chart.js'],
		githubUrl: 'https://github.com/kkhuu131/valstocks',
		liveUrl: 'https://valstocks.vercel.app',
		features: [
			'Real-time stock price updates and market data',
			'Virtual portfolio management with buy/sell functionality',
			'Interactive charts and market analysis tools',
			'User authentication and profile management',
			'Transaction history and performance tracking',
			'Watchlist functionality for monitoring stocks',
			'Responsive design for all devices'
		],
		challenges: [
			'Integrating with external stock market APIs',
			'Handling real-time data updates efficiently',
			'Implementing complex financial calculations',
			'Creating an intuitive trading interface'
		],
		solutions: [
			'Used multiple API sources for reliable stock data',
			'Implemented WebSocket connections for real-time updates',
			'Created reusable calculation utilities for financial operations',
			'Designed a clean, professional UI inspired by trading platforms'
		],
		learnings: [
			'Financial data integration and API management',
			'Real-time data handling in web applications',
			'Complex state management for financial calculations',
			'User experience design for financial applications'
		],
		role: 'Full-Stack Developer',
		timeline: '3 months',
		status: 'completed'
	},
	{
		id: 2,
		title: 'UW Campus Pathfinder',
		shortDescription: 'A navigation web app for finding the shortest path between two points on the University of Washington campus.',
		description: 'UW Campus Pathfinder is a specialized navigation application designed specifically for the University of Washington campus. It helps students, faculty, and visitors find the most efficient routes between buildings, taking into account campus-specific factors like construction zones, accessibility requirements, and seasonal changes. The app features an interactive map, route optimization, and real-time updates about campus conditions.',
		image: '/uwpathfinder.png',
		technologies: ['TypeScript', 'Firebase', 'React', 'Java Spark', 'Java', 'Google Maps API'],
		liveUrl: 'https://uwcampuspathfinder.web.app/',
		features: [
			'Interactive campus map with building locations',
			'Shortest path algorithm implementation',
			'Real-time construction and accessibility updates',
			'Multiple route options with time estimates',
			'Offline functionality for basic navigation',
			'Accessibility features for disabled users',
			'Mobile-optimized interface'
		],
		challenges: [
			'Mapping complex campus infrastructure accurately',
			'Implementing efficient pathfinding algorithms',
			'Handling real-time updates for campus conditions',
			'Ensuring accessibility compliance'
		],
		solutions: [
			'Used graph-based data structures for campus mapping',
			'Implemented Dijkstra\'s algorithm for optimal pathfinding',
			'Created a content management system for campus updates',
			'Utilized Docker and Kubernetes for deployment'
		],
		learnings: [
			'Graph algorithms and pathfinding techniques',
			'Real-time data synchronization',
			'Accessibility standards and implementation',
			'Mobile-first web development'
		],
		role: 'Full-Stack Developer',
		timeline: '2 months',
		status: 'completed'
	},
	{
		id: 3,
		title: 'Bird Classifier',
		shortDescription: 'A bird classification model that identifies 555 species of birds using transfer learning, with an accuracy of 85.2%',
		description: 'The Bird Classifier is a machine learning application that can identify 555 different species of birds from uploaded images. Built using transfer learning with PyTorch, the model achieves 85.2% accuracy on the test dataset. The application includes a web interface for easy image upload and classification, along with detailed information about each bird species.',
		image: '/birdclassifier.png',
		technologies: ['Python', 'PyTorch', 'Transfer Learning', 'Computer Vision', 'Flask', 'Netlify'],
		liveUrl: 'https://birdclassification.netlify.app/',
		features: [
			'Classification of 555 bird species',
			'Web interface for image upload and classification',
			'Detailed species information and descriptions',
			'Confidence scores for predictions',
			'Mobile-responsive design',
			'Batch processing capabilities',
			'Educational content about bird species'
		],
		challenges: [
			'Training a model with limited computational resources',
			'Handling class imbalance in the dataset',
			'Optimizing model performance for web deployment',
			'Creating an intuitive user interface for non-technical users'
		],
		solutions: [
			'Used transfer learning with pre-trained ResNet models',
			'Implemented data augmentation and class weighting',
			'Optimized model size for web deployment',
			'Created a simple drag-and-drop interface'
		],
		learnings: [
			'Transfer learning techniques and best practices',
			'Computer vision model optimization',
			'Handling imbalanced datasets in machine learning',
			'Deploying ML models to web applications'
		],
		role: 'Machine Learning Engineer',
		timeline: '6 weeks',
		status: 'completed'
	},
	{
		id: 4,
		title: 'Discordle',
		shortDescription: 'Discordle is a fun and competitive game where users attempt to guess who sent a specific Discord message.',
		description: 'Discordle is a multiplayer guessing game inspired by Wordle, but for Discord communities. Players are presented with anonymous Discord messages and must guess which server member sent them. The game features multiple difficulty levels, leaderboards, and integration with Discord bots for seamless gameplay within Discord servers.',
		image: '/discordle.png',
		technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'Socket.io', 'Python', 'Discord API'],
		githubUrl: 'https://github.com/tomynguy/discordle',
		features: [
			'Real-time multiplayer gameplay',
			'Discord bot integration for server play',
			'Multiple difficulty levels and game modes',
			'Leaderboards and scoring system',
			'Message anonymization and privacy protection',
			'Customizable game settings',
			'Mobile and desktop support'
		],
		challenges: [
			'Implementing real-time multiplayer functionality',
			'Integrating with Discord API and bot systems',
			'Ensuring user privacy and message anonymization',
			'Creating engaging gameplay mechanics'
		],
		solutions: [
			'Used Socket.io for real-time communication',
			'Developed custom Discord bot with slash commands',
			'Implemented secure message processing and anonymization',
			'Created progressive difficulty and hint systems'
		],
		learnings: [
			'Real-time multiplayer game development',
			'Discord API integration and bot development',
			'WebSocket communication patterns',
			'Game design and user engagement strategies'
		],
		role: 'Full-Stack Developer',
		timeline: '2 months',
		status: 'completed'
	}
];
