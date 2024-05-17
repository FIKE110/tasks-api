import jwt from 'jsonwebtoken';
import 'dotenv/config';

/**
 * Signs a JSON Web Token (JWT) with the provided payload.
 * @param payload The data to be included in the JWT.
 * @returns The signed JWT.
 */
export function sign(payload: any) {
    return jwt.sign(payload, process.env.JWTSECRETKEY as string, {
        algorithm: 'HS256',
        expiresIn: 3600 * 10 // Expires in 10 hours
    });
}

/**
 * Verifies the authenticity of a JWT.
 * @param token The JWT to verify.
 * @returns The decoded payload of the JWT if verification is successful.
 */
export function verify(token: string) {
    return jwt.verify(token, process.env.JWTSECRETKEY as string);
}

/**
 * Decodes a JWT without verifying its authenticity.
 * @param token The JWT to decode.
 * @returns The decoded payload of the JWT.
 */
export function decode(token: string) {
    return jwt.decode(token);
}
