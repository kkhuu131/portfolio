<script lang="ts">
	// Sample project data
	const featuredProjects = [
		{
			id: 0,
			title: 'Digitask',
			description:
				'Full-stack web application that combines task management with virtual pet gamification to increase user engagement and productivity.',
			image: '/digitask.png',
			tags: ['Typescript', 'Supabase', 'React', 'PostgreSQL', 'Vite']
		},
		{
			id: 1,
			title: 'ValStocks',
			description:
				'A full-stack stock simulation platform built with React, Next.js, Node.js, and Supabase.',
			image: '/valstocks.png',
			tags: ['React', 'Next.js', 'Node.js', 'Typescript', 'Supabase']
		}
	];
</script>

<svelte:head>
	<title>Kevin Khuu</title>
	<meta name="description" content="Portfolio" />
</svelte:head>

<!-- Hero Section -->
<section class="hero min-h-[60vh] rounded-lg bg-base-200">
	<div class="container-narrow hero-content flex-col lg:flex-row">
		<div class="max-w-2xl">
			<h1 class="hero-title">Kevin Khuu</h1>
			<p class="hero-paragraph mb-8 text-lg">
				I'm an aspiring software engineer with a strong foundation in full-stack development,
				distributed systems, and artificial intelligence. I have experience working on real-time web
				applications, AI training, and game development, applying my skills across web, backend, and
				game engines. Passionate about building scalable and efficient software, I enjoy tackling
				complex problems and optimizing performance.
			</p>
			<p class="hero-paragraph mb-8 text-lg">
				Currently pursuing my Master’s in Computer Science at UT Austin online and based in Seattle,
				WA. I’m eager to continue learning and growing as an engineer.
			</p>
			<div class="flex gap-4">
				<a href="/about" class="btn btn-outline btn-lg">About Me</a>
			</div>
		</div>
	</div>
</section>

<!-- Featured Projects Section -->
<section>
	<div class="container-narrow">
		<div class="mb-8">
			<h2 class="text-left text-3xl font-bold">Featured Projects</h2>
			<p class="mt-2 text-lg">Some of my recent work</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each featuredProjects as project}
				<a href={`/projects#project-${project.id}`} class="card-link equal-height-card">
					<div class="card h-full bg-base-100 shadow-xl transition-all hover:shadow-2xl">
						<figure>
							<img src={project.image} alt={project.title} />
						</figure>
						<div class="d-flex flex-column card-body">
							<h3 class="card-title">{project.title}</h3>
							<p class="flex-grow-1">{project.description}</p>
							<div class="mt-2 flex flex-wrap gap-3">
								{#each project.tags as tag}
									<span class="tech-tag">{tag}</span>
								{/each}
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>

		<div class="mt-8 text-left">
			<a href="/projects" class="btn btn-outline btn-wide">View All</a>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section class="py-16">
	<div class="container-narrow">
		<div class="mt-16 text-left">
			<h2 class="text-3xl font-bold">Contact</h2>
		</div>

		<div class="flex items-center gap-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				/>
			</svg>
			<span>kkhuu131@gmail.com</span>
		</div>
		<div class="flex items-center gap-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
				/>
			</svg>
			<span>(206) 866-4600</span>
		</div>
		<div class="flex items-center gap-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
				/>
			</svg>
			<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class="link link-primary"
				>View Resume</a
			>
		</div>
	</div>
</section>
