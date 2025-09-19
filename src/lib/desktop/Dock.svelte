<script lang="ts">
import { createEventDispatcher } from 'svelte';
import { desktopStore } from './store';

const dispatch = createEventDispatcher<{ openApp: 'resume' | 'projects' | 'about' | 'experience' | 'education' }>();

function open(app: 'resume' | 'projects' | 'about' | 'experience' | 'education') {
	dispatch('openApp', app);
}
</script>

<div class="dock-wrap">
    <div class="dock">
        <button class="dock-item" onclick={() => open('about')} aria-label="About">
            <div class="dock-img-box"><img src="/folder.webp" alt="About" /></div>
            <span>About</span>
        </button>
        <button class="dock-item" onclick={() => open('projects')} aria-label="Projects">
            <div class="dock-img-box"><img src="/folder.webp" alt="Projects" /></div>
            <span>Projects</span>
        </button>
        <button class="dock-item" onclick={() => open('experience')} aria-label="Experience">
            <div class="dock-img-box"><img src="/folder.webp" alt="Experience" /></div>
            <span>Experience</span>
        </button>
        <button class="dock-item" onclick={() => open('education')} aria-label="Education">
            <div class="dock-img-box"><img src="/folder.webp" alt="Education" /></div>
            <span>Education</span>
        </button>
        <button class="dock-item" onclick={() => open('resume')} aria-label="Resume">
            <div class="dock-img-box"><img src="/document.png" alt="Resume" /></div>
            <span>Resume</span>
        </button>
    </div>
</div>

<style>
.dock-wrap {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 16px;
	display: flex;
	justify-content: center;
	pointer-events: none;
}

.dock {
	backdrop-filter: blur(10px);
	background: rgba(17, 24, 39, 0.5);
	border: 1px solid rgba(255,255,255,0.1);
	border-radius: 16px;
	padding: 8px 10px;
	display: flex;
	gap: 12px;
	box-shadow: 0 10px 30px rgba(0,0,0,0.35);
	pointer-events: auto;
}

.dock-item {
	appearance: none;
	background: transparent;
	border: 0;
	cursor: pointer;
	padding: 6px;
	border-radius: 12px;
	transition: transform 120ms ease, background 120ms ease;
}

.dock-item:hover {
	transform: translateY(-4px) scale(1.05);
	background: rgba(255,255,255,0.06);
}

.dock-img-box { width: 48px; height: 48px; display: grid; place-items: center; }
.dock-item img { width: 100%; height: 100%; max-width: 48px; max-height: 48px; object-fit: contain; border-radius: 8px; transform-origin: center; }
/* Upscale folder icon slightly in dock as well */
.dock-item img[src$="folder.webp"] { transform: scale(1.12); }

.dock-item span {
    display: block;
    font-size: 11px;
    color: #e5e7eb;
    margin-top: 4px;
}
</style>


