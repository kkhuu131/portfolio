<script lang="ts">
	export let url: string;
</script>

<div class="wrap">
	<iframe class="frame" title={url} src={url} sandbox="allow-same-origin allow-scripts allow-forms allow-popups" referrerpolicy="no-referrer" loading="lazy"></iframe>
</div>

<style>
.wrap { position: absolute; inset: 0; }
.frame { width: 100%; height: 100%; border: 0; background: #0b1220; }
</style>



