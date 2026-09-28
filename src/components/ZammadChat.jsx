import { useEffect } from 'react';
import { loadZammadChat } from '../lib/zammad';

let hasStarted = false;

async function startZammadChat() {
    if (hasStarted) {
        return;
    }

    const { jQuery, ZammadChat } = await loadZammadChat();

    if (hasStarted) {
        return;
    }

    jQuery(() => {
        if (hasStarted) {
            return;
        }

        hasStarted = true;
        new ZammadChat({
            background: '#1537de',
            fontSize: '12px',
            flat: true,
            chatId: 1,
            debug: import.meta.env.DEV,
            title: '<strong>Chat</strong> s námi',
        });
    });
}

export default function ZammadChat() {
    useEffect(() => {
        let idleId;
        let timeoutId;

        const start = () => {
            void startZammadChat().catch((error) => {
                console.error('Unable to start Zammad chat.', error);
            });
        };

        const initialize = () => {
            if ('requestIdleCallback' in window) {
                idleId = window.requestIdleCallback(start, { timeout: 2_000 });
                return;
            }

            timeoutId = window.setTimeout(start, 0);
        };

        if (document.readyState === 'complete') {
            initialize();
        } else {
            window.addEventListener('load', initialize, { once: true });
        }

        return () => {
            window.removeEventListener('load', initialize);

            if (idleId !== undefined) {
                window.cancelIdleCallback(idleId);
            }

            if (timeoutId !== undefined) {
                window.clearTimeout(timeoutId);
            }
        };
    }, []);

    return null;
}
