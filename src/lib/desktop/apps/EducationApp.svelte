<script lang="ts">
import EducationPage from '../../../routes/education/+page.svelte';
</script>

<div class="wrap">
    <div class="scroll">
        <EducationPage />
    </div>
</div>

<style>
.wrap { position: absolute; inset: 0; display: flex; }
.scroll { overflow: auto; padding: 16px; width: 100%; }
</style>


