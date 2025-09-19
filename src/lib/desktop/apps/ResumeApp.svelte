<script lang="ts">
</script>

<div class="wrap">
	<div class="toolbar">
		<a class="btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Open in new tab</a>
		<a class="btn" href="/resume.pdf" download>Download</a>
	</div>
	<iframe class="viewer" src="/resume.pdf#view=FitH" title="Resume" />
</div>

<style>
.wrap { position: absolute; inset: 0; display: flex; flex-direction: column; }
.toolbar { display: flex; gap: 8px; padding: 8px; background: rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.08); }
.btn { font-size: 12px; color: #e5e7eb; text-decoration: none; padding: 6px 10px; border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; }
.viewer { flex: 1; width: 100%; border: 0; background: #111827; }
</style>


