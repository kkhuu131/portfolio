<script lang="ts">
import { experiences } from '../../lib/desktop/apps/AboutData';
</script>

<svelte:head>
    <title>Kevin Khuu</title>
    <meta name="description" content="Professional experience" />
</svelte:head>

<div class="about-container os-glass">
    <h1 class="about-title">Experience</h1>

    <div class="experience-section">
        {#each experiences as experience}
            <div class="experience-card">
                <div class="company-logo">
                    <img src={experience.image} alt={experience.company} />
                </div>
                <div class="experience-content">
                    <h3 class="experience-title">{experience.title}</h3>
                    <p class="company-name">{experience.company}</p>
                    <p class="period">{experience.period}</p>
                    <ul class="description">
                        {#each experience.description as bulletPoint}
                            <li>{bulletPoint}</li>
                        {/each}
                    </ul>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
.about-container { max-width: 900px; margin: 0 auto; padding: 2rem 1rem; }
.about-title { font-size: 2.5rem; font-weight: 600; margin-bottom: 2rem; }
.experience-section { display: flex; flex-direction: column; gap: 1.5rem; }
.experience-card { display: flex; gap: 1rem; padding: 1rem; border-radius: 12px; background-color: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); backdrop-filter: blur(12px); box-shadow: 0 14px 28px rgba(0,0,0,0.2); }
.company-logo { flex-shrink: 0; width: 60px; height: 60px; }
.company-logo img { width: 100%; height: 100%; border-radius: 0.25rem; object-fit: cover; }
.experience-content { flex: 1; }
.experience-title { font-weight: 600; margin-bottom: 0.25rem; }
.company-name { color: #9ca3af; margin-bottom: 0.25rem; }
.period { color: #9ca3af; font-size: 0.875rem; margin-bottom: 0.75rem; }
.description { line-height: 1.6; margin: 0; padding-left: 1.25rem; }
.description li { margin-bottom: 0.5rem; }
.description li:last-child { margin-bottom: 0; }
</style>


