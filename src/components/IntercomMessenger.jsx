import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Intercom, { update } from '@intercom/messenger-js-sdk';

const INTERCOM_APP_ID = import.meta.env.VITE_INTERCOM_APP_ID || 'q6mjoflj';
const INTERCOM_REGION = import.meta.env.VITE_INTERCOM_REGION;

function getIntercomSettings() {
    const settings = {
        app_id: INTERCOM_APP_ID,
    };

    if (INTERCOM_REGION) {
        settings.region = INTERCOM_REGION;
    }

    return settings;
}

export default function IntercomMessenger() {
    const location = useLocation();
    const hasInitialized = useRef(false);
    const hasSeenFirstRoute = useRef(false);

    useEffect(() => {
        if (!INTERCOM_APP_ID || typeof window === 'undefined') {
            return;
        }

        Intercom(getIntercomSettings());
        hasInitialized.current = true;
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
