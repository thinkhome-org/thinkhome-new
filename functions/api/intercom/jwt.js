import { createIntercomJwt } from '../../_lib/intercom-jwt.js';

const ONE_DAY_IN_MS = 86_400_000;

function json(body, init = {}) {
    return Response.json(body, {
        headers: {
            'Cache-Control': 'no-store',
        },
        ...init,
    });
}

function getAuthenticatedUser(request) {
    const email = request.headers.get('Cf-Access-Authenticated-User-Email');
    const userId =
        request.headers.get('Cf-Access-Authenticated-User-Id')
        || email;

    if (!userId) {
        return null;
    }

    return {
        user_id: userId,
        ...(email ? { email } : {}),
    };
}

export async function onRequestGet(context) {
    const secret = context.env.INTERCOM_MESSENGER_SECRET;

    if (!secret) {
        return json(
            {
                error: 'Missing INTERCOM_MESSENGER_SECRET Pages secret.',
            },
            { status: 500 },
        );
    }

    const user = getAuthenticatedUser(context.request);

    if (!user) {
        return json(
            {
                error: 'No authenticated user context was found for Intercom JWT issuance.',
            },
            { status: 501 },
        );
    }

    const token = await createIntercomJwt(user, secret, {
        expiresInSeconds: 3600,
    });

    return json({
        token,
        user,
        session_duration: ONE_DAY_IN_MS,
    });
}
