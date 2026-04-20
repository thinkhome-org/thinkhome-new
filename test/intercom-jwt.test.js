import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';

import { createIntercomJwt } from '../functions/_lib/intercom-jwt.js';

function decodeJwt(token) {
    const [headerPart, payloadPart, signaturePart] = token.split('.');

    const header = JSON.parse(Buffer.from(headerPart, 'base64url').toString('utf8'));
    const payload = JSON.parse(Buffer.from(payloadPart, 'base64url').toString('utf8'));

    return { headerPart, payloadPart, signaturePart, header, payload };
}

test('createIntercomJwt creates an HS256 token with user_id and expiry', async () => {
    const secret = 'test-secret';
    const now = 1_700_000_000;
    const token = await createIntercomJwt(
        {
            user_id: 'user-123',
            email: 'user@example.com',
        },
        secret,
        {
            expiresInSeconds: 3600,
            now,
        },
    );

    const { headerPart, payloadPart, signaturePart, header, payload } = decodeJwt(token);
    const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(`${headerPart}.${payloadPart}`)
        .digest('base64url');

    assert.equal(header.alg, 'HS256');
    assert.equal(header.typ, 'JWT');
    assert.equal(payload.user_id, 'user-123');
    assert.equal(payload.email, 'user@example.com');
    assert.equal(payload.iat, now);
    assert.equal(payload.exp, now + 3600);
    assert.equal(signaturePart, expectedSignature);
});
