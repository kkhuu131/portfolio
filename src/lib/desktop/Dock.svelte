<script lang="ts">
import { createEventDispatcher } from 'svelte';
import { desktopStore } from './store';

const dispatch = createEventDispatcher<{ openApp: 'resume' | 'projects' | 'about' | 'experience' | 'education' | 'music' }>();

function open(app: 'resume' | 'projects' | 'about' | 'experience' | 'education' | 'music') {
    dispatch('openApp', app);
}

function openDigitask() {
    desktopStore.openWeb('https://digitask-pi.vercel.app/', 'Digitask', { w: 1100, h: 720 });
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
        <button class="dock-item" onclick={() => open('music')} aria-label="Music">
            <div class="dock-img-box"><img src="/musicapp.png" alt="Music" /></div>
            <span>Music</span>
        </button>
        <button class="dock-item" onclick={openDigitask} aria-label="Digitask">
            <div class="dock-img-box"><img src="/digitask_icon.png" alt="Digitask" /></div>
            <span>Digitask</span>
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
	padding: 12px 16px;
	display: flex;
	gap: 16px;
	box-shadow: 0 10px 30px rgba(0,0,0,0.35);
	pointer-events: auto;
}

.dock-item {
	appearance: none;
	background: transparent;
	border: 0;
	cursor: pointer;
	padding: 8px;
	border-radius: 16px;
	transition: transform 120ms ease, background 120ms ease;
}

.dock-item:hover {
	transform: translateY(-4px) scale(1.05);
	background: rgba(255,255,255,0.06);
}

.dock-img-box { width: 60px; height: 60px; display: grid; place-items: center; }
.dock-item img { width: 100%; height: 100%; max-width: 60px; max-height: 60px; object-fit: contain; border-radius: 8px; transform-origin: center; }
/* Upscale folder icon slightly in dock as well */
.dock-item img[src$="folder.webp"] { transform: scale(1.12); }
/* Preserve sharp pixel look for 32x32 icons like Digitask */
.dock-item img[src$="digitask_icon.png"] { image-rendering: pixelated; image-rendering: crisp-edges; }

.dock-item span {
    display: block;
    font-size: 13px;
    font-family: 'Comic Neue', 'Comic Sans MS', cursive;
    font-weight: 700;
    color: #e5e7eb;
    margin-top: 6px;
}
</style>


