<script lang="ts">
import { education } from '../../lib/desktop/apps/AboutData';
</script>

<svelte:head>
    <title>Kevin Khuu</title>
    <meta name="description" content="Education" />
</svelte:head>

<div class="about-container os-glass">
    <h1 class="about-title">Education</h1>

    <div class="education-section">
        {#each education as edu}
            <div class="education-card">
                <div class="institution-logo">
                    <img src={edu.image} alt={edu.institution} />
                </div>
                <div class="education-content">
                    <h3 class="degree-title">{edu.degree}</h3>
                    <p class="institution-name">{edu.institution}</p>
                    <p class="period">{edu.period}</p>
                    <p class="gpa">GPA: {edu.gpa}</p>
                    <p class="courses">Courses: {edu.courses.join(', ')}</p>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
.about-container { max-width: 900px; margin: 0 auto; padding: 2rem 1rem; }
.about-title { font-size: 2.5rem; font-weight: 600; margin-bottom: 2rem; }
.education-section { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem; }
.education-card { display: flex; gap: 1rem; padding: 1rem; border-radius: 12px; background-color: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); backdrop-filter: blur(12px); box-shadow: 0 14px 28px rgba(0,0,0,0.2); }
.institution-logo { flex-shrink: 0; width: 60px; height: 60px; }
.institution-logo img { width: 100%; height: 100%; border-radius: 0.25rem; object-fit: cover; }
.education-content { flex: 1; }
.degree-title { font-weight: 600; margin-bottom: 0.25rem; }
.institution-name { color: #9ca3af; margin-bottom: 0.25rem; }
.period { color: #9ca3af; font-size: 0.875rem; }
.gpa { color: #9ca3af; font-size: 0.875rem; }
.courses { color: #9ca3af; font-size: 0.875rem; }
</style>


