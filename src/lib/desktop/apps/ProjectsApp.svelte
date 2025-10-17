<script lang="ts">
	import { projects, type ProjectItem } from './ProjectData';
	import { desktopStore } from '../store';

	let currentView: 'list' | 'detail' = 'list';
	let selectedProjectId: number | null = null;

	// Ensure projects is available
	let selectedProject: ProjectItem | null = null;
	$: selectedProject = selectedProjectId && projects ? projects.find(p => p.id === selectedProjectId) || null : null;

	const handleProjectClick = (projectId: number) => {
		console.log('Project clicked:', projectId);
		selectedProjectId = projectId;
		currentView = 'detail';
		console.log('Current view:', currentView, 'Selected project ID:', selectedProjectId);
	};

	const handleBackClick = () => {
		currentView = 'list';
		selectedProjectId = null;
	};

	const handleExternalClick = (url: string) => {
		desktopStore.openWeb(url);
	};
</script>

<div class="wrap">
	<div class="scroll">
		{#if currentView === 'list'}
			<div class="projects-container">
				<h1 class="projects-title">Projects</h1>

				{#if projects && projects.length > 0}
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

								

								{#if project.liveUrl}
								<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="project-link live-link"
									on:click|preventDefault|stopPropagation={() => handleExternalClick(project.liveUrl!)}
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
								{#if project.githubUrl}
								<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="project-link github-link"
									on:click|preventDefault|stopPropagation={() => handleExternalClick(project.githubUrl!)}
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
							</div>
						</div>
					</div>
					{/each}
				{:else}
					<div class="error-message">
						<p>No projects available</p>
					</div>
				{/if}
			</div>
		{:else if currentView === 'detail'}
			{#if selectedProject}
				<div class="project-detail-container">
				<!-- Back Button -->
				<button class="back-button" on:click={handleBackClick}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
					</svg>
					Back to Projects
				</button>

				<!-- Project Header -->
				<div class="project-header">
					<div class="project-image-section">
						<img src={selectedProject.image} alt={selectedProject.title} class="project-hero-image" />
					</div>
					<div class="project-info">
						<h1 class="project-title">{selectedProject.title}</h1>
						<p class="project-description">{selectedProject.description}</p>
						
						<div class="project-meta">
							<div class="meta-item">
								<span class="meta-label">Role:</span>
								<span class="meta-value">{selectedProject.role}</span>
							</div>
							<div class="meta-item">
								<span class="meta-label">Timeline:</span>
								<span class="meta-value">{selectedProject.timeline}</span>
							</div>
							<div class="meta-item">
								<span class="meta-label">Status:</span>
								<span class="meta-value status-{selectedProject.status}">{selectedProject.status}</span>
							</div>
						</div>

						<div class="project-technologies">
							<h3>Technologies Used</h3>
							<div class="tech-list">
								{#each selectedProject.technologies as tech}
									<span class="tech-tag">{tech}</span>
								{/each}
							</div>
						</div>

						<div class="project-links">
							{#if selectedProject.githubUrl}
								<button 
									class="project-link github-link"
									on:click={() => handleExternalClick(selectedProject.githubUrl!)}
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
										<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
									</svg>
									View Code
								</button>
							{/if}

							{#if selectedProject.liveUrl}
								<button 
									class="project-link live-link"
									on:click={() => handleExternalClick(selectedProject.liveUrl!)}
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
										<path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
										<path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
									</svg>
									Visit
								</button>
							{/if}
						</div>
					</div>
				</div>

				<!-- Project Details -->
				<div class="project-details">
					<div class="detail-section">
						<h2>Key Features</h2>
						<ul class="feature-list">
							{#each selectedProject.features as feature}
								<li>{feature}</li>
							{/each}
						</ul>
					</div>

					<div class="detail-section">
						<h2>Challenges Faced</h2>
						<ul class="challenge-list">
							{#each selectedProject.challenges as challenge}
								<li>{challenge}</li>
							{/each}
						</ul>
					</div>

					<div class="detail-section">
						<h2>Solutions Implemented</h2>
						<ul class="solution-list">
							{#each selectedProject.solutions as solution}
								<li>{solution}</li>
							{/each}
						</ul>
					</div>

					<div class="detail-section">
						<h2>Key Learnings</h2>
						<ul class="learning-list">
							{#each selectedProject.learnings as learning}
								<li>{learning}</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
			{:else}
				<div class="debug-container">
					<h2>Loading...</h2>
					<p>Current View: {currentView}</p>
					<p>Selected Project ID: {selectedProjectId}</p>
					<button class="back-button" on:click={handleBackClick}>Back to Projects</button>
				</div>
			{/if}
		{/if}
	</div>
</div>

<style>
	.wrap { position: absolute; inset: 0; display: flex; }
	.scroll { overflow: auto; padding: 16px; width: 100%; }

	.projects-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 1rem;
	}

	.projects-title {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
		color: #e5e7eb;
	}

	.project-card {
		display: flex;
		flex-direction: column;
		margin-bottom: 2rem;
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
		height: 200px;
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
		padding: 1.25rem;
		flex: 1;
	}

	.project-title {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		color: #e5e7eb;
	}

	.project-description {
		margin-bottom: 1rem;
		line-height: 1.5;
		color: #d1d5db;
		font-size: 0.875rem;
	}

	.project-technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
		margin-bottom: 1rem;
	}

	.tech-tag {
		display: inline-block;
		padding: 0.25rem 0.5rem;
		background-color: #374151;
		border-radius: 9999px;
		font-size: 0.75rem;
		color: #e5e7eb;
	}

	.project-links {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.project-link {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		padding: 0.5rem 0.75rem;
		border-radius: 0.375rem;
		font-size: 0.75rem;
		font-weight: 500;
		transition: all 0.2s ease;
		text-decoration: none;
		border: none;
		cursor: pointer;
	}

	.view-details-link {
		background-color: #10b981;
		color: white;
	}

	.view-details-link:hover {
		background-color: #059669;
	}

	.github-link {
		background-color: #24292e;
		color: white;
	}

	.github-link:hover {
		background-color: #1b1f23;
	}

	.live-link {
		background-color: #3b82f6;
		color: white;
	}

	.live-link:hover {
		background-color: #2563eb;
	}


	/* Responsive styles */
	@media (min-width: 768px) {
		.project-card {
			flex-direction: row;
		}

		.project-image-wrapper {
			width: 300px;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			height: 100%;
		}

		.project-content {
			flex: 1;
			margin-left: 300px;
			padding: 1.25rem;
		}
	}

	/* Project Detail Styles */
	.project-detail-container {
		padding: 1rem;
		height: 100%;
		overflow-y: auto;
	}

	.back-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background-color: transparent;
		border: 1px solid #4b5563;
		color: #4b5563;
		border-radius: 0.375rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
		margin-bottom: 1.5rem;
		font-size: 0.875rem;
	}

	.back-button:hover {
		background-color: #4b5563;
		color: white;
	}

	.project-header {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.project-image-section {
		width: 100%;
		max-width: 400px;
		margin: 0 auto;
	}

	.project-hero-image {
		width: 100%;
		height: auto;
		border-radius: 0.75rem;
		box-shadow: 0 10px 25px rgba(0,0,0,0.2);
	}

	.project-info {
		flex: 1;
	}

	.project-meta {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
		padding: 1rem;
		background-color: rgba(255,255,255,0.06);
		border-radius: 0.5rem;
		border: 1px solid rgba(255,255,255,0.12);
	}

	.meta-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.meta-label {
		font-weight: 600;
		color: #9ca3af;
		font-size: 0.875rem;
	}

	.meta-value {
		color: #e5e7eb;
		font-size: 0.875rem;
	}

	.status-completed {
		color: #10b981;
		font-weight: 600;
	}

	.status-in-progress {
		color: #f59e0b;
		font-weight: 600;
	}

	.status-archived {
		color: #6b7280;
		font-weight: 600;
	}

	.project-technologies h3 {
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
		color: #e5e7eb;
	}

	.project-details {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.detail-section {
		background-color: rgba(255,255,255,0.06);
		border-radius: 0.75rem;
		padding: 1.5rem;
		border: 1px solid rgba(255,255,255,0.12);
	}

	.detail-section h2 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: #e5e7eb;
	}

	.feature-list,
	.challenge-list,
	.solution-list,
	.learning-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.feature-list li,
	.challenge-list li,
	.solution-list li,
	.learning-list li {
		padding: 0.5rem 0;
		border-bottom: 1px solid rgba(255,255,255,0.1);
		position: relative;
		padding-left: 1.25rem;
		font-size: 0.875rem;
		line-height: 1.5;
		color: #d1d5db;
	}

	.feature-list li:last-child,
	.challenge-list li:last-child,
	.solution-list li:last-child,
	.learning-list li:last-child {
		border-bottom: none;
	}

	.feature-list li::before {
		content: "✓";
		position: absolute;
		left: 0;
		color: #10b981;
		font-weight: bold;
	}

	.challenge-list li::before {
		content: "⚠";
		position: absolute;
		left: 0;
		color: #f59e0b;
		font-weight: bold;
	}

	.solution-list li::before {
		content: "💡";
		position: absolute;
		left: 0;
		font-weight: bold;
	}

	.learning-list li::before {
		content: "📚";
		position: absolute;
		left: 0;
		font-weight: bold;
	}

	/* Responsive styles for project detail */
	@media (min-width: 768px) {
		.project-header {
			flex-direction: row;
			align-items: flex-start;
		}

		.project-image-section {
			width: 300px;
			flex-shrink: 0;
		}

		.project-meta {
			flex-direction: row;
			justify-content: space-between;
		}

		.meta-item {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
		}
	}

	@media (min-width: 1024px) {
		.project-details {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}
	}

	/* Debug container styles */
	.debug-container {
		padding: 2rem;
		text-align: center;
		color: #e5e7eb;
	}

	.debug-container h2 {
		color: #e5e7eb;
		margin-bottom: 1rem;
	}

	.debug-container p {
		margin-bottom: 0.5rem;
		color: #d1d5db;
	}

	.error-message {
		padding: 2rem;
		text-align: center;
		color: #e5e7eb;
	}

	.error-message p {
		color: #d1d5db;
	}
</style>


