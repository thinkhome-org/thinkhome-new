const ZAMMAD_BASE_URL = 'https://servis.thinkhome.org';
const scriptPromises = new Map();

function loadScript({ id, src, isReady }) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return Promise.reject(new Error(`Cannot load ${id} outside the browser.`));
    }

    if (isReady()) {
        return Promise.resolve();
    }

    const pendingScript = scriptPromises.get(id);
    if (pendingScript) {
        return pendingScript;
    }

    const scriptPromise = new Promise((resolve, reject) => {
        const existingScript = document.getElementById(id);
        const script = existingScript || document.createElement('script');

        const handleLoad = () => {
            if (!isReady()) {
                scriptPromises.delete(id);
                reject(new Error(`${src} loaded without exposing its expected API.`));
                return;
            }

            resolve();
        };

        const handleError = () => {
            scriptPromises.delete(id);
            reject(new Error(`Failed to load ${src}.`));
        };

        script.addEventListener('load', handleLoad, { once: true });
        script.addEventListener('error', handleError, { once: true });

        if (!existingScript) {
            script.id = id;
            script.src = src;
            script.async = true;
            document.head.appendChild(script);
        }
    });

    scriptPromises.set(id, scriptPromise);
    return scriptPromise;
}

export async function loadZammadAsset({ id, path, isReady }) {
    await loadScript({
        id: 'zammad-jquery',
        src: 'https://code.jquery.com/jquery-3.6.0.min.js',
        isReady: () => typeof window.jQuery === 'function',
    });

    await loadScript({
        id,
        src: `${ZAMMAD_BASE_URL}${path}`,
        isReady,
    });
}

export async function loadZammadChat() {
    await loadZammadAsset({
        id: 'zammad-chat-loader',
        path: '/assets/chat/chat.min.js',
        isReady: () => typeof window.ZammadChat === 'function',
    });

    return {
        jQuery: window.jQuery,
        ZammadChat: window.ZammadChat,
    };
}
