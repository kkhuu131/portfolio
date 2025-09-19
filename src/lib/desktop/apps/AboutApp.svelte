<script lang="ts">
import AboutPage from '../../../routes/about/+page.svelte';
</script>

<div class="wrap">
	<div class="scroll">
		<AboutPage />
	</div>
</div>

<style>
.wrap { position: absolute; inset: 0; display: flex; }
.scroll { overflow: auto; padding: 16px; width: 100%; }
</style>


