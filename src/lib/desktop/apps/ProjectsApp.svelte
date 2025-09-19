<script lang="ts">
import ProjectsPage from '../../../routes/projects/+page.svelte';
</script>

<div class="wrap">
	<div class="scroll">
		<ProjectsPage />
	</div>
</div>

<style>
.wrap { position: absolute; inset: 0; display: flex; }
.scroll { overflow: auto; padding: 16px; width: 100%; }
</style>


