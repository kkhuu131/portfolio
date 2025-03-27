<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();
	let isDarkMode = false;

	onMount(() => {
		// Check if user has a theme preference stored
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
			isDarkMode = true;
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
		}
	});

	const handleToggleTheme = () => {
		isDarkMode = !isDarkMode;
		const theme = isDarkMode ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	};
</script>

<div class="portfolio-container">
	<header class="navbar">
		<div class="navbar-container">
			<div class="navbar-start">
				<a href="/" class="logo">Portfolio</a>
			</div>
			<div class="navbar-center">
				<ul class="nav-menu">
					<li><a href="/projects">Projects</a></li>
					<li><a href="/about">About</a></li>
				</ul>
			</div>
			<div class="navbar-end">
				<div class="social-links">
					<a
						href="https://github.com/kkhuu131"
						target="_blank"
						rel="noopener noreferrer"
						class="social-button"
						aria-label="GitHub"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							/>
						</svg>
					</a>
					<a
						href="https://linkedin.com/in/kevinkhuu21"
						target="_blank"
						rel="noopener noreferrer"
						class="social-button"
						aria-label="LinkedIn"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
							/>
						</svg>
					</a>
					<button on:click={handleToggleTheme} class="theme-toggle" aria-label="Toggle theme">
						{#if isDarkMode}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
								/>
							</svg>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
								/>
							</svg>
						{/if}
					</button>
				</div>
			</div>
		</div>
	</header>

	<main class="main-content container-narrow">
		{@render children()}
		<div class="bottom-spacer"></div>
	</main>
</div>

<style>
	/* Basic layout */
	.portfolio-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: white;
	}

	/* Navbar styling */
	.navbar {
		background-color: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 1rem 0;
	}

	.navbar-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.navbar-start,
	.navbar-center,
	.navbar-end {
		display: flex;
		align-items: center;
	}

	.logo {
		font-size: 1.25rem;
		font-weight: 600;
		color: #333;
		text-decoration: none;
		padding: 0.5rem 1rem;
	}

	.nav-menu {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-menu li {
		margin: 0 0.5rem;
	}

	.nav-menu a {
		color: #333;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;
		transition: background-color 0.3s;
	}

	.nav-menu a:hover {
		background-color: #f3f4f6;
	}

	.social-links {
		display: flex;
		gap: 0.5rem;
	}

	.social-button,
	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background: none;
		border: none;
		cursor: pointer;
		color: #333;
		transition: background-color 0.3s;
	}

	.social-button:hover,
	.theme-toggle:hover {
		background-color: #f3f4f6;
	}

	/* Main content */
	.main-content {
		flex-grow: 1;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	/* Footer */
	.footer {
		background-color: #f3f4f6;
		padding: 2.5rem 0;
		text-align: center;
		color: #4b5563;
	}

	/* Dark mode */
	:global(html[data-theme='dark']) .portfolio-container {
		background-color: #1f2937;
		color: #f9fafb;
	}

	:global(html[data-theme='dark']) .navbar {
		background-color: #111827;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
	}

	:global(html[data-theme='dark']) .logo,
	:global(html[data-theme='dark']) .nav-menu a,
	:global(html[data-theme='dark']) .social-button,
	:global(html[data-theme='dark']) .theme-toggle {
		color: #f9fafb;
	}

	:global(html[data-theme='dark']) .nav-menu a:hover,
	:global(html[data-theme='dark']) .social-button:hover,
	:global(html[data-theme='dark']) .theme-toggle:hover {
		background-color: #374151;
	}

	:global(html[data-theme='dark']) .footer {
		background-color: #111827;
		color: #d1d5db;
	}
</style>
