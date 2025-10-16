import { writable } from 'svelte/store';

export type AppId = 'resume' | 'projects' | 'about' | 'experience' | 'education' | 'music';

export type DesktopWindow = {
	id: string;
	appId: AppId;
	title: string;
	zIndex: number;
	minimized: boolean;
	focused: boolean;
	bounds: { x: number; y: number; w: number; h: number };
};

type DesktopState = {
	windows: DesktopWindow[];
	activeZ: number;
	selectedIcon: AppId | null;
};

function createDesktopStore() {
    const { subscribe, update, set } = writable<DesktopState>({ windows: [], activeZ: 1, selectedIcon: null });

    const STORAGE_KEY = 'desktop-windows-v1';

    function persist(state: DesktopState) {
        try {
            const snapshot = state.windows.map((w) => ({
                id: w.id,
                appId: w.appId,
                title: w.title,
                bounds: w.bounds,
                minimized: w.minimized
            }));
            localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
        } catch {}
    }

	function open(appId: AppId, title: string, initialBounds?: Partial<DesktopWindow['bounds']>) {
		let newId = `${appId}-${Date.now()}`;
        update((state) => {
			const nextZ = state.activeZ + 1;
            const bounds = {
                x: initialBounds?.x ?? 80 + (state.windows.length * 24) % 200,
                y: initialBounds?.y ?? 80 + (state.windows.length * 24) % 200,
                w: initialBounds?.w ?? 960,
                h: initialBounds?.h ?? 640
            };
			const win: DesktopWindow = {
				id: newId,
				appId,
				title,
				zIndex: nextZ,
				minimized: false,
				focused: true,
				bounds
			};
			const windows = state.windows.map((w) => ({ ...w, focused: false }));
			windows.push(win);
            const next = { windows, activeZ: nextZ };
            persist(next);
            return next;
		});
		return newId;
	}

    function close(id: string) {
        update((state) => {
            const next = { ...state, windows: state.windows.filter((w) => w.id !== id) };
            persist(next);
            return next;
        });
	}

    function focus(id: string) {
        update((state) => {
			const nextZ = state.activeZ + 1;
            const next = {
				activeZ: nextZ,
				windows: state.windows.map((w) =>
					w.id === id ? { ...w, focused: true, zIndex: nextZ, minimized: false } : { ...w, focused: false }
				)
            };
            persist(next);
            return next;
		});
	}

    function setBounds(id: string, bounds: Partial<DesktopWindow['bounds']>) {
        update((state) => {
            const next = {
                ...state,
                windows: state.windows.map((w) => (w.id === id ? { ...w, bounds: { ...w.bounds, ...bounds } } : w))
            };
            persist(next);
            return next;
        });
	}

    function toggleMinimize(id: string) {
        update((state) => {
            const next = {
                ...state,
                windows: state.windows.map((w) => (w.id === id ? { ...w, minimized: !w.minimized, focused: !w.minimized } : w))
            };
            persist(next);
            return next;
        });
	}

    function loadPersisted() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            const parsed: Array<Pick<DesktopWindow, 'id' | 'appId' | 'title' | 'bounds' | 'minimized'>> = JSON.parse(raw);
            let z = 1;
            const windows: DesktopWindow[] = parsed.map((p) => ({
                id: p.id,
                appId: p.appId,
                title: p.title,
                bounds: p.bounds,
                minimized: p.minimized ?? false,
                focused: false,
                zIndex: ++z
            }));
            set({ windows, activeZ: z });
        } catch {}
    }

    function selectIcon(appId: AppId | null) {
        update((state) => ({
            ...state,
            selectedIcon: appId
        }));
    }

    function deselectIcon() {
        update((state) => ({
            ...state,
            selectedIcon: null
        }));
    }

    function handleIconClick(appId: AppId) {
        update((state) => {
            if (state.selectedIcon === appId) {
                // Double click - open the app
                return { ...state, selectedIcon: null };
            } else {
                // First click - select the icon
                return { ...state, selectedIcon: appId };
            }
        });
    }

    return { subscribe, open, close, focus, setBounds, toggleMinimize, loadPersisted, selectIcon, deselectIcon, handleIconClick };
}

export const desktopStore = createDesktopStore();


