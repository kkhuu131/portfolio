<script lang="ts">
import { desktopStore } from '../store';
import { onMount, onDestroy } from 'svelte';

// Sample playlist data - you can replace this with your own music files
const playlist = [
	{
		id: 1,
		title: "Imagine",
		artist: "John Lennon",
		duration: "3:08",
		playing: false,
		audioFile: "/audio/Imagine.mp3",
		fallbackUrl: "https://music.youtube.com/watch?v=rAn-AWXtHv0&si=kbSW1W2S4z6sqtQm"
	},
	{
		id: 2,
		title: "Canon in D",
		artist: "Johann Pachelbel",
		duration: "6:16",
		playing: false,
		audioFile: "/audio/Canon_in_D.mp3",
		fallbackUrl: "https://music.youtube.com/watch?v=lgh68Swuak0&si=78wml-tl-kNkMtTa"
	},
	{
		id: 3,
		title: "Where Our Blue Is",
		artist: "Katsuya Kitani",
		duration: "3:24",
		playing: false,
		audioFile: "/audio/Where_Our_Blue_Is.mp3",
		fallbackUrl: "https://music.youtube.com/watch?v=A2jr18ZbkFc&si=UdMjicrh5ms-hVFV"
	},
];

let currentTrack = playlist[0];
let isPlaying = false;
let currentTime = 0;
let duration = 180; // Will be updated when audio loads
let audioElement: HTMLAudioElement;
let hasAudio = false;
let volume = 0.5; // Default volume (0-1)

onMount(() => {
	// Initialize audio element
	audioElement = new Audio();
	
	// Set up event listeners
	audioElement.addEventListener('loadedmetadata', () => {
		duration = Math.floor(audioElement.duration);
		hasAudio = true;
	});
	
	audioElement.addEventListener('timeupdate', () => {
		currentTime = Math.floor(audioElement.currentTime);
	});
	
	audioElement.addEventListener('ended', () => {
		isPlaying = false;
		currentTrack.playing = false;
		currentTime = 0;
	});
	
	audioElement.addEventListener('error', () => {
		console.log('Audio file not found, falling back to visual mode');
		hasAudio = false;
	});
	
	// Load first track
	loadTrack(currentTrack);
	
	// Set initial volume
	audioElement.volume = volume;
});

onDestroy(() => {
	if (audioElement) {
		audioElement.pause();
		audioElement.src = '';
	}
});

function loadTrack(track: typeof playlist[0]) {
	if (audioElement) {
		audioElement.src = track.audioFile;
		audioElement.load();
	}
}

function playTrack(track: typeof playlist[0]) {
	// Stop current track
	playlist.forEach(t => t.playing = false);
	
	// Play new track
	track.playing = true;
	currentTrack = track;
	
	// Load and play audio if available
	if (hasAudio && audioElement) {
		loadTrack(track);
		audioElement.play().then(() => {
			isPlaying = true;
		}).catch((error) => {
			console.log('Audio playback failed:', error);
			// Fall back to visual simulation
			playbackSimulation();
		});
	} else {
		// Fall back to visual simulation
		isPlaying = true;
		playbackSimulation();
	}
}

function togglePlayback() {
	if (hasAudio && audioElement) {
		if (isPlaying) {
			audioElement.pause();
			isPlaying = false;
		} else {
			audioElement.play().then(() => {
				isPlaying = true;
			}).catch((error) => {
				console.log('Audio playback failed:', error);
				// Fall back to visual simulation
				isPlaying = true;
				playbackSimulation();
			});
		}
	} else {
		// Fall back to visual simulation
		isPlaying = !isPlaying;
		if (isPlaying) {
			playbackSimulation();
		}
	}
}

function playbackSimulation() {
	if (!isPlaying) return;
	
	const interval = setInterval(() => {
		if (!isPlaying) {
			clearInterval(interval);
			return;
		}
		
		currentTime += 1;
		if (currentTime >= duration) {
			currentTime = 0;
			isPlaying = false;
			currentTrack.playing = false;
			clearInterval(interval);
		}
	}, 1000);
}

function formatTime(seconds: number): string {
	const mins = Math.floor(seconds / 60);
	const secs = seconds % 60;
	return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function seekTo(event: MouseEvent) {
	if (!hasAudio || !audioElement) return;
	
	const progressBar = event.currentTarget as HTMLElement;
	const rect = progressBar.getBoundingClientRect();
	const clickX = event.clientX - rect.left;
	const percentage = clickX / rect.width;
	const newTime = percentage * duration;
	
	audioElement.currentTime = newTime;
	currentTime = Math.floor(newTime);
}

function updateVolume(event: Event) {
	const target = event.target as HTMLInputElement;
	volume = parseFloat(target.value);
	if (audioElement) {
		audioElement.volume = volume;
	}
}

function skipPrevious() {
	const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
	let previousIndex = currentIndex - 1;
	
	if (previousIndex < 0) {
		previousIndex = playlist.length - 1; // Loop to last track
	}
	
	playTrack(playlist[previousIndex]);
}

function skipNext() {
	const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
	let nextIndex = currentIndex + 1;
	
	if (nextIndex >= playlist.length) {
		nextIndex = 0; // Loop to first track
	}
	
	playTrack(playlist[nextIndex]);
}

</script>

<div class="music-app">
	<div class="music-header">
		<h2>🎵 Music Player</h2>
	</div>
	
	<div class="music-content">
		<!-- Current Track Display -->
		<div class="current-track">
			<div class="album-art">
				<div class="album-placeholder">
					<span>♪</span>
				</div>
			</div>
			<div class="track-info">
				<h3 class="track-title">{currentTrack.title}</h3>
				<p class="track-artist">{currentTrack.artist}</p>
			</div>
		</div>

		<!-- Progress Bar -->
		<div class="progress-container">
			<span class="time">{formatTime(currentTime)}</span>
			<div class="progress-bar" onclick={seekTo}>
				<div class="progress" style="width: {(currentTime / duration) * 100}%"></div>
			</div>
			<span class="time">{formatTime(duration)}</span>
		</div>

		<!-- Controls -->
		<div class="controls">
			<button class="control-btn" onclick={skipPrevious}>⏮</button>
			<button class="control-btn play-btn" onclick={togglePlayback}>
				{isPlaying ? '⏸' : '▶'}
			</button>
			<button class="control-btn" onclick={skipNext}>⏭</button>
		</div>

		<!-- Volume Control -->
		<div class="volume-container">
			<span class="volume-icon">🔊</span>
			<input 
				type="range" 
				class="volume-slider" 
				min="0" 
				max="1" 
				step="0.01" 
				bind:value={volume}
				oninput={updateVolume}
			/>
			<span class="volume-value">{Math.round(volume * 100)}%</span>
		</div>

		<!-- Playlist -->
		<div class="playlist">
			<h4>Playlist</h4>
			<div class="track-list">
				{#each playlist as track}
					<div class="track-item" class:playing={track.playing} onclick={() => playTrack(track)}>
						<div class="track-number">{track.id}</div>
						<div class="track-details">
							<div class="track-name">{track.title}</div>
							<div class="track-artist">{track.artist}</div>
						</div>
						<div class="track-duration">{track.duration}</div>
						{#if track.playing}
							<div class="playing-indicator">♪</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
.music-app {
	width: 100%;
	height: 100%;
	background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
	color: white;
	display: flex;
	flex-direction: column;
	font-family: 'Inter', sans-serif;
	overflow: hidden;
}

.music-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 20px;
	background: rgba(0, 0, 0, 0.2);
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.music-header h2 {
	margin: 0;
	font-size: 18px;
	font-weight: 600;
}


.music-content {
	flex: 1;
	padding: 20px;
	overflow-y: auto;
}

.current-track {
	display: flex;
	align-items: center;
	gap: 16px;
	margin-bottom: 24px;
	padding: 20px;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 12px;
	backdrop-filter: blur(10px);
}

.album-art {
	width: 80px;
	height: 80px;
	border-radius: 12px;
	overflow: hidden;
	flex-shrink: 0;
}

.album-placeholder {
	width: 100%;
	height: 100%;
	background: linear-gradient(45deg, #6366f1, #8b5cf6);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 32px;
	color: white;
}

.track-info {
	flex: 1;
}

.track-title {
	margin: 0 0 4px 0;
	font-size: 20px;
	font-weight: 600;
}

.track-artist {
	margin: 0;
	color: rgba(255, 255, 255, 0.8);
	font-size: 14px;
}

.progress-container {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-bottom: 24px;
}

.time {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.7);
	min-width: 35px;
}

.progress-bar {
	flex: 1;
	height: 4px;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 2px;
	overflow: hidden;
	cursor: pointer;
	transition: height 0.2s ease;
}

.progress-bar:hover {
	height: 6px;
}

.progress {
	height: 100%;
	background: #60a5fa;
	transition: width 0.1s ease;
}

.controls {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	margin-bottom: 32px;
	width: 100%;
}

.control-btn {
	background: rgba(255, 255, 255, 0.1);
	border: none;
	color: white;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	cursor: pointer;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s;
	backdrop-filter: blur(10px);
	line-height: 1;
	flex-shrink: 0;
}

.control-btn:hover {
	background: rgba(255, 255, 255, 0.2);
	transform: scale(1.05);
}

.play-btn {
	width: 64px;
	height: 64px;
	font-size: 24px;
	background: #60a5fa;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 1;
}

.play-btn:hover {
	background: #93c5fd;
}

.volume-container {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-bottom: 24px;
	padding: 12px 20px;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 8px;
}

.volume-icon {
	font-size: 16px;
	width: 24px;
	text-align: center;
}

.volume-slider {
	flex: 1;
	height: 4px;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 2px;
	outline: none;
	-webkit-appearance: none;
	appearance: none;
	cursor: pointer;
}

.volume-slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 16px;
	height: 16px;
	background: #60a5fa;
	border-radius: 50%;
	cursor: pointer;
	transition: all 0.2s ease;
}

.volume-slider::-webkit-slider-thumb:hover {
	background: #93c5fd;
	transform: scale(1.1);
}

.volume-slider::-moz-range-thumb {
	width: 16px;
	height: 16px;
	background: #60a5fa;
	border-radius: 50%;
	cursor: pointer;
	border: none;
	transition: all 0.2s ease;
}

.volume-slider::-moz-range-thumb:hover {
	background: #93c5fd;
	transform: scale(1.1);
}

.volume-value {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.7);
	min-width: 35px;
	text-align: right;
}

.playlist h4 {
	margin: 0 0 16px 0;
	font-size: 16px;
	font-weight: 600;
	color: rgba(255, 255, 255, 0.9);
}

.track-list {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.track-item {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 12px;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.2s;
	position: relative;
}

.track-item:hover {
	background: rgba(255, 255, 255, 0.1);
	transform: translateX(4px);
}

.track-item.playing {
	background: rgba(96, 165, 250, 0.2);
	border: 1px solid rgba(96, 165, 250, 0.4);
}

.track-number {
	width: 20px;
	text-align: center;
	font-size: 12px;
	color: rgba(255, 255, 255, 0.6);
}

.track-details {
	flex: 1;
}

.track-name {
	font-size: 14px;
	font-weight: 500;
	margin-bottom: 2px;
}

.track-artist {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.7);
}

.track-duration {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.6);
}

.playing-indicator {
	position: absolute;
	right: 12px;
	top: 50%;
	transform: translateY(-50%);
	color: #60a5fa;
	font-size: 16px;
	animation: pulse 1.5s infinite;
}

@keyframes pulse {
	0%, 100% { opacity: 0.5; }
	50% { opacity: 1; }
}
</style>
