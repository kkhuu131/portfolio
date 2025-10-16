<script lang="ts">
	import { projects } from '../../lib/desktop/apps/ProjectData';
	import { goto } from '$app/navigation';

	const handleProjectClick = (projectId: number) => {
		goto(`/projects/${projectId}`);
	};
</script>

<svelte:head>
	<title>Kevin Khuu</title>
	<meta name="description" content="Projects by Kevin Khuu" />
</svelte:head>

<div class="projects-container os-glass">
	<h1 class="projects-title">Projects</h1>

	{#each projects as project}
		<div 
			class="project-card" 
			id={`project-${project.id}`}
			role="button"
			tabindex="0"
			on:click={() => handleProjectClick(project.id)}
			on:keydown={(e) => e.key === 'Enter' && handleProjectClick(project.id)}
		>
			<div class="project-image-wrapper">
				<div class="project-image-container">
					<img src={project.image} alt={project.title} />
				</div>
			</div>
			<div class="project-content">
				<h2 class="project-title">{project.title}</h2>
				<p class="project-description">{project.shortDescription}</p>
				<div class="project-technologies">
					{#each project.technologies as tech}
						<span class="tech-tag">{tech}</span>
					{/each}
				</div>

				<div class="project-links">
					<!-- <button class="project-link view-details-link">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
							/>
							<path
								fill-rule="evenodd"
								d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
							/>
						</svg>
						View Details
					</button> -->

					{#if project.githubUrl}
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="project-link github-link"
							on:click|stopPropagation
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
								/>
							</svg>
							GitHub
						</a>
					{/if}

					{#if project.liveUrl}
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="project-link live-link"
							on:click|stopPropagation
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
								/>
								<path
									fill-rule="evenodd"
									d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
								/>
							</svg>
							Visit
						</a>
					{/if}
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.projects-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	.projects-title {
		font-size: 2.5rem;
		font-weight: 600;
		margin-bottom: 2rem;
	}

    .project-card {
        display: flex;
        flex-direction: column;
        margin-bottom: 3rem;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid rgba(255,255,255,0.12);
        background-color: rgba(255,255,255,0.06);
        position: relative;
        backdrop-filter: blur(12px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .project-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 25px 50px rgba(0,0,0,0.3);
    }

    .project-card:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
    }

	.project-image-wrapper {
		width: 100%;
		height: 250px;
	}

	.project-image-container {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.project-image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.project-content {
		padding: 1.5rem;
		flex: 1;
	}

	.project-title {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
	}

	.project-description {
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	.project-technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-tag {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		background-color: #f3f4f6;
		border-radius: 9999px;
		font-size: 0.875rem;
		color: #4b5563;
	}

	/* Dark mode styles */
    :global(html[data-theme='dark']) .project-card {
        background-color: rgba(17,24,39,0.65);
        border-color: rgba(255,255,255,0.12);
        backdrop-filter: blur(12px);
    }

	:global(html[data-theme='dark']) .project-title {
		color: #f9fafb;
	}

	:global(html[data-theme='dark']) .project-description {
		color: #d1d5db;
	}

	:global(html[data-theme='dark']) .tech-tag {
		background-color: #374151;
		color: #e5e7eb;
	}

	/* Responsive styles */
	@media (min-width: 768px) {
		.project-card {
			flex-direction: row;
		}

		.project-image-wrapper {
			width: 350px;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			height: 100%;
		}

		.project-content {
			flex: 1;
			margin-left: 350px;
			padding: 1.5rem;
		}
	}

	/* Add these styles to your existing CSS */
	.project-links {
		display: flex;
		gap: 1rem;
		margin-top: 1.5rem;
	}

	.project-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		border-radius: 0.375rem;
		font-size: 0.875rem;
		font-weight: 500;
		transition: all 0.2s ease;
		text-decoration: none;
	}

	.github-link {
		background-color: #24292e;
		color: white;
	}

	.github-link:hover {
		background-color: #1b1f23;
		text-decoration: none;
	}

	.live-link {
		background-color: #3b82f6;
		color: white;
	}

	.live-link:hover {
		background-color: #2563eb;
		text-decoration: none;
	}

	.view-details-link {
		background-color: #10b981;
		color: white;
		border: none;
	}

	.view-details-link:hover {
		background-color: #059669;
		text-decoration: none;
	}

	/* Dark mode styles for the links */
	:global(html[data-theme='dark']) .github-link {
		background-color: #333;
	}

	:global(html[data-theme='dark']) .github-link:hover {
		background-color: #444;
	}
</style>
