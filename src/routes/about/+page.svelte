<script lang="ts">
    import { experiences, education } from '../../lib/desktop/apps/AboutData';
    // Tech stack data
	const techStack = {
		experience: '1 year',
		location: 'Seattle, WA',
		email: 'kkhuu131@gmail.com',
		github: 'kkhuu131',
		frontend: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
		backend: ['Node.js', 'Express.js', 'PostgreSQL', 'SQL', 'Supabase'],
		tools: ['REST', 'Git'],
		other: ['Python', 'Java', 'C++', 'Typescript']
	};
</script>

<svelte:head>
	<title>About Me | Kevin Khuu</title>
	<meta name="description" content="About Kevin Khuu - Software Engineer" />
</svelte:head>

<div class="about-container os-glass">
	<h1 class="about-title">About Me</h1>

	<div class="hero-section">
		<div class="hero-content">
			<!-- <h2 class="love-title">I <span class="heart">❤️</span> to build things</h2> -->
			<p class="bio">
				I'm an aspiring software engineer with a strong foundation in full-stack development,
				distributed systems, and artificial intelligence. I have experience working on real-time web
				applications, AI training, and game development, applying my skills across web, backend, and
				game engines. Passionate about building scalable and efficient software, I enjoy tackling
				complex problems and optimizing performance.
			</p>
			<p class="bio">
				Currently pursuing my Master's in Computer Science at UT Austin online and based in Seattle,
				WA. I'm eager to continue learning and growing as an engineer.
			</p>
			<a href="/resume.pdf" class="download-resume" download>Download Resume</a>
		</div>
		<div class="profile-image">
			<img src="/profile.jpg" alt="Kevin Khuu" />
		</div>
	</div>

	<h2 class="section-title">Details</h2>

	<div class="details-section">
		<div class="personal-info">
			<div class="info-item">
				<h3>Experience</h3>
				<p>{techStack.experience}</p>
			</div>
			<div class="info-item">
				<h3>Location</h3>
				<p>{techStack.location}</p>
			</div>
			<div class="info-item">
				<h3>Email</h3>
				<p><a href={`mailto:${techStack.email}`}>{techStack.email}</a></p>
			</div>
			<div class="info-item">
				<h3>GitHub</h3>
				<p>
					<a
						href={`https://github.com/${techStack.github}`}
						target="_blank"
						rel="noopener noreferrer">{techStack.github}</a
					>
				</p>
			</div>
		</div>

		<div class="experience-section">
			{#each experiences as experience}
				<div class="experience-card">
					<div class="company-logo">
						<img src={experience.image} alt={experience.company} />
					</div>
					<div class="experience-content">
						<h3 class="experience-title">{experience.title}</h3>
						<p class="company-name">
							{#if experience.company === 'StudioTuko'}
								<a href="https://tuko.studio/" target="_blank" rel="noopener noreferrer"
									>{experience.company}</a
								>
							{:else}
								{experience.company}
							{/if}
						</p>
						<p class="period">{experience.period}</p>
						<p class="description">{experience.description}</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="education-section">
			<h2 class="section-title">Education</h2>

			{#each education as edu}
				<div class="education-card">
					<div class="institution-logo">
						<img src={edu.image} alt={edu.institution} />
					</div>
					<div class="education-content">
						<h3 class="degree-title">{edu.degree}</h3>
						<p class="institution-name">{edu.institution}</p>
						<p class="period">{edu.period}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<h2 class="section-title">Stack</h2>

	<div class="stack-section">
		<div class="stack-category">
			<h3>Frontend</h3>
			<div class="tech-list">
				{#each techStack.frontend as tech}
					<span class="tech-badge">{tech}</span>
				{/each}
			</div>
		</div>
		<div class="stack-category">
			<h3>Backend</h3>
			<div class="tech-list">
				{#each techStack.backend as tech}
					<span class="tech-badge">{tech}</span>
				{/each}
			</div>
		</div>
		<div class="stack-category">
			<h3>Tools</h3>
			<div class="tech-list">
				{#each techStack.tools as tech}
					<span class="tech-badge">{tech}</span>
				{/each}
			</div>
		</div>
		<div class="stack-category">
			<h3>Other</h3>
			<div class="tech-list">
				{#each techStack.other as tech}
					<span class="tech-badge">{tech}</span>
				{/each}
			</div>
		</div>
	</div>

	<!-- <h2 class="section-title">Interests</h2>
	<div class="interests-section">
		<p>
			When I'm not coding, I enjoy hiking, photography, reading tech blogs, and exploring new
			technologies. I'm particularly interested in blockchain development, AI, and creating
			innovative solutions that make a positive impact.
		</p>
	</div> -->
</div>

<style>
	.about-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	.about-title {
		font-size: 2.5rem;
		font-weight: 600;
		margin-bottom: 2rem;
	}

	.hero-section {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.hero-content {
		flex: 1;
	}

    /* removed unused styles */

	.bio {
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.download-resume {
		display: inline-block;
		padding: 0.5rem 1rem;
		background-color: transparent;
		border: 1px solid #4b5563;
		color: #4b5563;
		border-radius: 0.25rem;
		text-decoration: none;
		font-weight: 500;
		transition: all 0.3s ease;
	}

	.download-resume:hover {
		background-color: #4b5563;
		color: white;
	}

	.profile-image {
		width: 100%;
		max-width: 300px;
		margin: 0 auto;
	}

	.profile-image img {
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
		object-fit: cover;
	}

	.section-title {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 2rem 0 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #e5e7eb;
	}

	.details-section {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.personal-info {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 1rem;
	}

	.info-item h3 {
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.info-item a {
		color: #3b82f6;
		text-decoration: none;
	}

	.info-item a:hover {
		text-decoration: underline;
	}

	.experience-section {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

    .experience-card {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        border-radius: 12px;
        background-color: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.12);
        backdrop-filter: blur(12px);
        box-shadow: 0 14px 28px rgba(0,0,0,0.2);
    }

	.company-logo {
		flex-shrink: 0;
		width: 60px;
		height: 60px;
	}

	.company-logo img {
		width: 100%;
		height: 100%;
		border-radius: 0.25rem;
		object-fit: cover;
	}

	.experience-content {
		flex: 1;
	}

	.experience-title {
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.company-name {
		color: #6b7280;
		margin-bottom: 0.25rem;
	}

	.period {
		color: #9ca3af;
		font-size: 0.875rem;
		margin-bottom: 0.75rem;
	}

	.description {
		line-height: 1.6;
	}

	.stack-section {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 1.5rem;
	}

	.stack-category h3 {
		font-weight: 600;
		margin-bottom: 0.75rem;
	}

	.tech-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-badge {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		background-color: #f3f4f6;
		border-radius: 0.25rem;
		font-size: 0.875rem;
		color: #4b5563;
	}

    /* removed unused styles */

	.education-section {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-top: 2rem;
	}

    .education-card {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        border-radius: 12px;
        background-color: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.12);
        backdrop-filter: blur(12px);
        box-shadow: 0 14px 28px rgba(0,0,0,0.2);
    }

	.institution-logo {
		flex-shrink: 0;
		width: 60px;
		height: 60px;
	}

	.institution-logo img {
		width: 100%;
		height: 100%;
		border-radius: 0.25rem;
		object-fit: cover;
	}

	.education-content {
		flex: 1;
	}

	.degree-title {
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.institution-name {
		color: #6b7280;
		margin-bottom: 0.25rem;
	}

	/* Dark mode styles */
	:global(html[data-theme='dark']) .download-resume {
		border-color: #f9fafb;
		color: #f9fafb;
	}

	:global(html[data-theme='dark']) .download-resume:hover {
		background-color: #f9fafb;
		color: #1f2937;
	}

	:global(html[data-theme='dark']) .section-title {
		border-color: #4b5563;
	}

    :global(html[data-theme='dark']) .experience-card {
        background-color: rgba(17,24,39,0.65);
        border-color: rgba(255,255,255,0.12);
        backdrop-filter: blur(12px);
    }

	:global(html[data-theme='dark']) .company-name {
		color: #9ca3af;
	}

	:global(html[data-theme='dark']) .period {
		color: #6b7280;
	}

	:global(html[data-theme='dark']) .tech-badge {
		background-color: #374151;
		color: #e5e7eb;
	}

	:global(html[data-theme='dark']) .info-item a {
		color: #60a5fa;
	}

    :global(html[data-theme='dark']) .education-card {
        background-color: rgba(17,24,39,0.65);
        border-color: rgba(255,255,255,0.12);
        backdrop-filter: blur(12px);
    }

	:global(html[data-theme='dark']) .institution-name {
		color: #9ca3af;
	}

	/* Responsive styles */
	@media (min-width: 768px) {
		.hero-section {
			flex-direction: row;
			align-items: center;
		}

		.profile-image {
			margin: 0;
		}

		.personal-info {
			grid-template-columns: repeat(2, 1fr);
		}

		.stack-section {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.personal-info {
			grid-template-columns: repeat(3, 1fr);
		}

		.stack-section {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
