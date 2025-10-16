<script lang="ts">
import { desktopStore, type DesktopWindow } from './store';
import ResumeApp from './apps/ResumeApp.svelte';
import ProjectsApp from './apps/ProjectsApp.svelte';
import AboutApp from './apps/AboutApp.svelte';
import ExperienceApp from './apps/ExperienceApp.svelte';
import EducationApp from './apps/EducationApp.svelte';
import MusicApp from './apps/MusicApp.svelte';

export let win: DesktopWindow;

let startX = 0;
let startY = 0;
let startBounds = { x: 0, y: 0, w: 0, h: 0 };

function onMouseDownHeader(e: MouseEvent) {
	if ((e.target as HTMLElement).closest('.controls')) return;
	desktopStore.focus(win.id);
	startX = e.clientX;
	startY = e.clientY;
	startBounds = { ...win.bounds };
	window.addEventListener('mousemove', onMove);
	window.addEventListener('mouseup', onUp);
}

function onMove(e: MouseEvent) {
	const dx = e.clientX - startX;
	const dy = e.clientY - startY;
	
	// Calculate new position
	let newX = startBounds.x + dx;
	let newY = startBounds.y + dy;
	
	// Apply boundary constraints
	const minX = 0; // Don't go off the left edge
	const maxX = window.innerWidth - win.bounds.w; // Don't go off the right edge
	const minY = 0; // Don't go above the top edge
	const maxY = window.innerHeight - win.bounds.h; // Don't go below the bottom edge
	
	// Clamp the position within bounds
	newX = Math.max(minX, Math.min(maxX, newX));
	newY = Math.max(minY, Math.min(maxY, newY));
	
	desktopStore.setBounds(win.id, { x: newX, y: newY });
}

function onUp() {
	window.removeEventListener('mousemove', onMove);
	window.removeEventListener('mouseup', onUp);
}

function resizeFrom(corner: 'se' | 'e' | 's') {
	return (e: MouseEvent) => {
		desktopStore.focus(win.id);
		startX = e.clientX;
		startY = e.clientY;
		startBounds = { ...win.bounds };
		function move(ev: MouseEvent) {
			const dx = ev.clientX - startX;
			const dy = ev.clientY - startY;
			const next: Partial<DesktopWindow['bounds']> = {};
			
			if (corner === 'se' || corner === 'e') {
				const newWidth = Math.max(320, startBounds.w + dx);
				// Ensure window doesn't go off the right edge
				const maxWidth = window.innerWidth - startBounds.x;
				next.w = Math.min(newWidth, maxWidth);
			}
			
			if (corner === 'se' || corner === 's') {
				const newHeight = Math.max(220, startBounds.h + dy);
				// Ensure window doesn't go off the bottom edge
				const maxHeight = window.innerHeight - startBounds.y;
				next.h = Math.min(newHeight, maxHeight);
			}
			
			desktopStore.setBounds(win.id, next);
		}
		function up() {
			window.removeEventListener('mousemove', move);
			window.removeEventListener('mouseup', up);
		}
		window.addEventListener('mousemove', move);
		window.addEventListener('mouseup', up);
	};
}

function close() { desktopStore.close(win.id); }
function minimize() { desktopStore.toggleMinimize(win.id); }
function focus() { desktopStore.focus(win.id); }

let isMaximized = false;
let prevBounds: { x: number; y: number; w: number; h: number } | null = null;

function toggleMaximize() {
	if (!isMaximized) {
		prevBounds = { ...win.bounds };
		desktopStore.setBounds(win.id, { x: 0, y: 0, w: window.innerWidth, h: window.innerHeight });
		isMaximized = true;
		desktopStore.focus(win.id);
	} else {
		if (prevBounds) {
			desktopStore.setBounds(win.id, prevBounds);
		}
		isMaximized = false;
		desktopStore.focus(win.id);
	}
}
</script>

<div class="window" role="dialog" tabindex="0" aria-label={win.title} class:minimized={win.minimized} on:mousedown={focus} style={`z-index:${win.zIndex}; transform: translate(${win.bounds.x}px, ${win.bounds.y}px) scale(${win.minimized ? 0.92 : 1}); opacity:${win.minimized ? 0 : 1}; width:${win.bounds.w}px; height:${win.bounds.h}px;`}>
    <div class="titlebar" role="toolbar" tabindex="0" on:mousedown={onMouseDownHeader}>
        <div class="traffic">
            <button class="dot close" aria-label="Close" on:click|stopPropagation={close}></button>
            <button class="dot minimize" aria-label="Minimize" on:click|stopPropagation={minimize}></button>
            <button class="dot zoom" aria-label="Zoom" on:click|stopPropagation={toggleMaximize}></button>
        </div>
        <div class="title">{win.title}</div>
        <div class="controls"></div>
    </div>
    <div class="content">
		{#if win.appId === 'resume'}
			<ResumeApp />
		{:else if win.appId === 'projects'}
			<ProjectsApp />
        {:else if win.appId === 'about'}
			<AboutApp />
        {:else if win.appId === 'experience'}
            <ExperienceApp />
        {:else if win.appId === 'education'}
            <EducationApp />
        {:else if win.appId === 'music'}
            <MusicApp />
		{/if}
	</div>
    <div class="resize se" role="separator" aria-label="Resize" on:mousedown={resizeFrom('se')}></div>
    <div class="resize e" role="separator" aria-label="Resize" on:mousedown={resizeFrom('e')}></div>
    <div class="resize s" role="separator" aria-label="Resize" on:mousedown={resizeFrom('s')}></div>
</div>

<style>
.window {
	position: absolute;
	background: rgba(17,24,39,0.85);
	backdrop-filter: blur(10px);
	border: 1px solid rgba(255,255,255,0.08);
	border-radius: 12px;
	box-shadow: 0 20px 40px rgba(0,0,0,0.45);
	overflow: hidden;
    transition: opacity 160ms ease, transform 180ms ease;
}
.window.minimized { pointer-events: none; }

.titlebar {
	height: 36px;
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 0 12px;
	background: linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0));
}

.traffic { display: flex; gap: 8px; }
.dot { width: 12px; height: 12px; border-radius: 999px; border: 1px solid rgba(0,0,0,0.25); background: #4b5563; }
.dot.close { background: #ff5f57; }
.dot.minimize { background: #ffbd2e; }
.dot.zoom { background: #28c840; }

.title { color: #e5e7eb; font-size: 12px; font-weight: 600; text-align: center; flex: 1; }

.content { position: absolute; inset: 36px 0 0 0; background: rgba(0,0,0,0.1); }

.resize { position: absolute; }
.resize.se { right: 0; bottom: 0; width: 14px; height: 14px; cursor: nwse-resize; }
.resize.e { right: 0; top: 36px; bottom: 0; width: 8px; cursor: ew-resize; }
.resize.s { left: 0; right: 0; bottom: 0; height: 8px; cursor: ns-resize; }
</style>


