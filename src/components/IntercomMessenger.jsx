import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Intercom, { update } from '@intercom/messenger-js-sdk';

const INTERCOM_APP_ID = import.meta.env.VITE_INTERCOM_APP_ID || 'q6mjoflj';
const INTERCOM_REGION = import.meta.env.VITE_INTERCOM_REGION;

function getBaseIntercomSettings() {
    const settings = {
        app_id: INTERCOM_APP_ID,
    };

    if (INTERCOM_REGION) {
        settings.region = INTERCOM_REGION;
    }

    return settings;
}

async function getSecureIntercomSettings() {
    const response = await fetch('/api/intercom/jwt', {
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
        },
    });

    if (!response.ok) {
        return null;
    }

    const data = await response.json();

    if (!data?.token) {
        return null;
    }

    return {
        ...getBaseIntercomSettings(),
        intercom_user_jwt: data.token,
        session_duration: data.session_duration,
        ...data.user,
    };
}

export default function IntercomMessenger() {
    const location = useLocation();
    const hasInitialized = useRef(false);
    const hasSeenFirstRoute = useRef(false);

    useEffect(() => {
        if (!INTERCOM_APP_ID || typeof window === 'undefined') {
            return;
        }

        let cancelled = false;

        const initializeIntercom = async () => {
            let settings = null;

            try {
                settings = await getSecureIntercomSettings();
            } catch {
                settings = null;
            }

            if (cancelled) {
                return;
            }

            Intercom(settings || getBaseIntercomSettings());
            hasInitialized.current = true;
        };

        initializeIntercom();

        return () => {
            cancelled = true;
        };
    }, []);

    useEffect(() => {
        if (!hasInitialized.current) {
            return;
        }

        if (!hasSeenFirstRoute.current) {
            hasSeenFirstRoute.current = true;
            return;
        }

        update();
    }, [location.pathname, location.search, location.hash]);

    return null;
}
