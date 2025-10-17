<script lang="ts">
import { onMount } from 'svelte';
import Dock from './Dock.svelte';
import Window from './Window.svelte';
import { desktopStore, type DesktopWindow, type AppId } from './store';

let windows: DesktopWindow[] = [];
let selectedIcon: AppId | null = null;
const unsubscribe = desktopStore.subscribe((state) => {
    windows = state.windows;
    selectedIcon = state.selectedIcon;
});

onMount(() => {
    desktopStore.loadPersisted();
    return () => unsubscribe();
});

function handleIconClick(appId: AppId, event: MouseEvent) {
    event.stopPropagation();
    
    if (selectedIcon === appId) {
        // Double click - open the app
        openApp(appId);
    } else {
        // First click - select the icon
        desktopStore.selectIcon(appId);
    }
}

function openApp(appId: AppId) {
    const title = appId === 'resume' ? 'Resume.pdf' : appId === 'projects' ? 'Projects' : appId === 'about' ? 'About Me' : appId === 'experience' ? 'Experience' : appId === 'education' ? 'Education' : appId === 'digitask' ? 'Digitask' : 'Music Player';
	if (appId === 'digitask') {
		openDigitask();
	} else {
		desktopStore.open(appId, title);
	}
}

function openDigitask() {
	desktopStore.openWeb('https://digitask-pi.vercel.app/', 'Digitask');
}

function handleDesktopClick() {
    desktopStore.deselectIcon();
}

let isMobile = false;
onMount(() => {
	const check = () => (isMobile = window.innerWidth < 768);
	check();
	window.addEventListener('resize', check);
	return () => window.removeEventListener('resize', check);
});
</script>

<div class="desktop" role="application" oncontextmenu={(e) => e.preventDefault()} onclick={handleDesktopClick}>
    <div class="wallpaper"></div>

	<!-- Desktop icons (minimal) -->
    <div class="icons">
        <button class="icon" class:selected={selectedIcon === 'resume'} onclick={(e) => handleIconClick('resume', e)}>
            <div class="icon-img-box"><img alt="Resume" src="/document.png" /></div>
			<span>Resume.pdf</span>
		</button>
		<button class="icon" class:selected={selectedIcon === 'about'} onclick={(e) => handleIconClick('about', e)}>
            <div class="icon-img-box"><img alt="About" src="/folder.webp" /></div>
			<span>About</span>
		</button>
        <button class="icon" class:selected={selectedIcon === 'projects'} onclick={(e) => handleIconClick('projects', e)}>
            <div class="icon-img-box"><img alt="Projects" src="/folder.webp" /></div>
			<span>Projects</span>
		</button>
        <button class="icon" class:selected={selectedIcon === 'experience'} onclick={(e) => handleIconClick('experience', e)}>
            <div class="icon-img-box"><img alt="Experience" src="/folder.webp" /></div>
            <span>Experience</span>
        </button>
        <button class="icon" class:selected={selectedIcon === 'education'} onclick={(e) => handleIconClick('education', e)}>
            <div class="icon-img-box"><img alt="Education" src="/folder.webp" /></div>
            <span>Education</span>
        </button>
        <button class="icon" class:selected={selectedIcon === 'music'} onclick={(e) => handleIconClick('music', e)}>
            <div class="icon-img-box"><img alt="Music" src="/musicapp.png" /></div>
            <span>Music</span>
        </button>
		<button class="icon" class:selected={selectedIcon === 'digitask'} onclick={(e) => handleIconClick('digitask', e)}>
			<div class="icon-img-box"><img alt="Digitask" src="/digitask_icon.png" /></div>
			<span>Digitask</span>
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
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	max-height: calc(100vh - 48px);
	gap: 20px;
	width: fit-content;
}

.icon {
	appearance: none;
	background: transparent;
	border: 0;
	width: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
	color: #e5e7eb;
	cursor: pointer;
	border-radius: 8px;
	padding: 4px;
	transition: background-color 0.15s ease;
}

.icon:hover {
	background: rgba(255, 255, 255, 0.05);
}

.icon.selected {
	background: rgba(59, 130, 246, 0.3);

}

.icon-img-box { width: 80px; height: 80px; display: grid; place-items: center; overflow: visible; }
.icon img { width: 100%; height: 100%; max-width: 70px; max-height: 70px; object-fit: contain; border-radius: 8px; background: rgba(255,255,255,0.00); backdrop-filter: blur(2px); transform-origin: center; }
.icon img[src$="folder.webp"] { transform: scale(1.15); }
/* Preserve sharp pixel look for 32x32 icons like Digitask */
.icon img[src$="digitask_icon.png"] { image-rendering: pixelated; image-rendering: crisp-edges; }

.icon span {
	font-size: 14px;
	font-family: 'Comic Neue', 'Comic Sans MS', cursive;
	font-weight: 700;
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


