<script lang="ts">
import { onMount } from 'svelte';
import Dock from './Dock.svelte';
import Window from './Window.svelte';
import { desktopStore, type DesktopWindow } from './store';

let windows: DesktopWindow[] = [];
const unsubscribe = desktopStore.subscribe((state) => (windows = state.windows));

onMount(() => {
    desktopStore.loadPersisted();
    return () => unsubscribe();
});

function openApp(appId: 'resume' | 'projects' | 'about' | 'experience' | 'education') {
    const title = appId === 'resume' ? 'Resume.pdf' : appId === 'projects' ? 'Projects' : appId === 'about' ? 'About Me' : appId === 'experience' ? 'Experience' : 'Education';
	desktopStore.open(appId, title);
}

let isMobile = false;
onMount(() => {
	const check = () => (isMobile = window.innerWidth < 768);
	check();
	window.addEventListener('resize', check);
	return () => window.removeEventListener('resize', check);
});
</script>

<div class="desktop" role="application" oncontextmenu={(e) => e.preventDefault()}>
    <div class="wallpaper"></div>

	<!-- Desktop icons (minimal) -->
    <div class="icons">
        <button class="icon" onclick={() => openApp('resume')}>
            <div class="icon-img-box"><img alt="Resume" src="/document.png" /></div>
			<span>Resume.pdf</span>
		</button>
        <button class="icon" onclick={() => openApp('projects')}>
            <div class="icon-img-box"><img alt="Projects" src="/folder.webp" /></div>
			<span>Projects</span>
		</button>
        <button class="icon" onclick={() => openApp('about')}>
            <div class="icon-img-box"><img alt="About" src="/folder.webp" /></div>
			<span>About</span>
		</button>
        <button class="icon" onclick={() => openApp('experience')}>
            <div class="icon-img-box"><img alt="Experience" src="/folder.webp" /></div>
            <span>Experience</span>
        </button>
        <button class="icon" onclick={() => openApp('education')}>
            <div class="icon-img-box"><img alt="Education" src="/folder.webp" /></div>
            <span>Education</span>
        </button>
	</div>

	<!-- Windows -->
	{#each windows as win (win.id)}
		<Window {win} />
	{/each}

    <!-- Dock -->
    <Dock on:openApp={(e) => openApp(e.detail)} />

    {#if isMobile}
		<a class="classic-link" href="/about">Switch to classic site</a>
	{/if}
</div>

<style>
.desktop {
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background: #0b1220;
}

.wallpaper {
	position: absolute;
	inset: 0;
    background-image: url('/graphicdesignismypassion.jpg');
    background-repeat: repeat;
    background-size: auto;
    background-position: top left;
	pointer-events: none;
}

.icons {
	position: absolute;
	top: 24px;
	left: 24px;
	display: grid;
	grid-template-columns: repeat(2, 96px);
	gap: 16px 24px;
}

.icon {
	appearance: none;
	background: transparent;
	border: 0;
	width: 96px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	color: #e5e7eb;
	cursor: pointer;
}

.icon-img-box { width: 64px; height: 64px; display: grid; place-items: center; overflow: visible; }
.icon img { width: 100%; height: 100%; max-width: 64px; max-height: 64px; object-fit: contain; border-radius: 8px; background: rgba(255,255,255,0.08); backdrop-filter: blur(2px); transform-origin: center; }
/* Slightly upscale folder.webp to compensate for transparent margins in the asset */
.icon img[src$="folder.webp"] { transform: scale(1.15); }

.icon span {
	font-size: 12px;
	text-shadow: 0 1px 2px rgba(0,0,0,0.6);
}

.classic-link {
	position: absolute;
	right: 16px;
	bottom: 150px;
	padding: 8px 12px;
	border-radius: 10px;
	border: 1px solid rgba(255,255,255,0.15);
	background: rgba(0,0,0,0.08); backdrop-filter: blur(2px);
	color: #e5e7eb;
	text-decoration: none;
}

</style>


