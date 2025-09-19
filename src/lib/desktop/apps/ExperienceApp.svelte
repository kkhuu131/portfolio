<script lang="ts">
import ExperiencePage from '../../../routes/experience/+page.svelte';
</script>

<div class="wrap">
    <div class="scroll">
        <ExperiencePage />
    </div>
</div>

<style>
.wrap { position: absolute; inset: 0; display: flex; }
.scroll { overflow: auto; padding: 16px; width: 100%; }
</style>


