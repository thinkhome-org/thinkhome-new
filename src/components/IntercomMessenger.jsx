import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const INTERCOM_APP_ID = import.meta.env.VITE_INTERCOM_APP_ID || 'q6mjoflj';
const INTERCOM_REGION = import.meta.env.VITE_INTERCOM_REGION || 'us';
const INTERCOM_SCRIPT_ID = 'intercom-messenger-loader';

const REGION_API_BASES = {
    us: 'https://api-iam.intercom.io',
    eu: 'https://api-iam.eu.intercom.io',
    au: 'https://api-iam.au.intercom.io',
};

function getIntercomSettings() {
    return {
        app_id: INTERCOM_APP_ID,
        api_base: REGION_API_BASES[INTERCOM_REGION] || REGION_API_BASES.us,
    };
}

function loadIntercomScript() {
    if (document.getElementById(INTERCOM_SCRIPT_ID)) {
        return;
    }

    const script = document.createElement('script');
    script.id = INTERCOM_SCRIPT_ID;
    script.async = true;
    script.src = `https://widget.intercom.io/widget/${INTERCOM_APP_ID}`;
    document.head.appendChild(script);
}

function bootIntercom() {
    if (typeof window === 'undefined') {
        return;
    }

    window.intercomSettings = getIntercomSettings();

    if (typeof window.Intercom === 'function') {
        window.Intercom('reattach_activator');
        window.Intercom('update', window.intercomSettings);
        return;
    }

    const intercomStub = function (...args) {
        intercomStub.q.push(args);
    };

    intercomStub.q = [];
    window.Intercom = intercomStub;
    loadIntercomScript();
}

function updateIntercom() {
    if (typeof window.Intercom === 'function') {
        window.Intercom('update');
    }
}

export default function IntercomMessenger() {
    const location = useLocation();
    const hasInitialized = useRef(false);
    const hasSeenFirstRoute = useRef(false);

    useEffect(() => {
        if (!INTERCOM_APP_ID || typeof window === 'undefined') {
            return;
        }

        bootIntercom();
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

        updateIntercom();
    }, [location.pathname, location.search, location.hash]);

    return null;
}
