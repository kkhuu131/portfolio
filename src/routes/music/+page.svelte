<script lang="ts">
	import { onMount } from 'svelte';
	
	onMount(() => {
		// This page can be used for embedded music content if needed
		// For now, it redirects back to the main desktop view
		window.location.href = '/';
	});
</script>

<div class="music-page">
	<h1>Music Player</h1>
	<p>Redirecting to desktop...</p>
</div>

<style>
	.music-page {
		padding: 2rem;
		text-align: center;
	}
</style>
