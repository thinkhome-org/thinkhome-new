const encoder = new TextEncoder();

function encodeBase64Url(value) {
    const bytes = value instanceof Uint8Array ? value : encoder.encode(value);

    if (typeof Buffer !== 'undefined') {
        return Buffer.from(bytes).toString('base64url');
    }

    let binary = '';
    for (const byte of bytes) {
        binary += String.fromCharCode(byte);
    }

    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/u, '');
}

async function signHmacSha256(secret, message) {
    const key = await crypto.subtle.importKey(
        'raw',
        encoder.encode(secret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign'],
    );

    const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(message));
    return encodeBase64Url(new Uint8Array(signature));
}

export async function createIntercomJwt(payload, secret, options = {}) {
    if (!payload?.user_id) {
        throw new Error('Intercom JWT payload must include user_id.');
    }

    if (!secret) {
        throw new Error('Intercom JWT secret is required.');
    }

    const now = options.now ?? Math.floor(Date.now() / 1000);
    const expiresInSeconds = options.expiresInSeconds ?? 3600;
    const header = { alg: 'HS256', typ: 'JWT' };
    const fullPayload = {
        ...payload,
        iat: now,
        exp: now + expiresInSeconds,
    };

    const headerPart = encodeBase64Url(JSON.stringify(header));
    const payloadPart = encodeBase64Url(JSON.stringify(fullPayload));
    const signaturePart = await signHmacSha256(secret, `${headerPart}.${payloadPart}`);

    return `${headerPart}.${payloadPart}.${signaturePart}`;
}
