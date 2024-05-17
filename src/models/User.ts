import { z } from 'zod';

/**
 * Represents a user object.
 */
export type User = {
    id?: number; // The unique identifier of the user (optional).
    username: string; // The username of the user.
    email: string; // The email address of the user.
    password: string; // The password of the user.
    created_at?: Date | string; // The date when the user was created (optional).
}

/**
 * Schema for validating User objects.
 */
export const UserSchema = z.object({
    id: z.number().optional(), // Validates id as an optional number.
    username: z.string(), // Validates username as a non-empty string.
    email: z.string().email(), // Validates email as a valid email address string.
    password: z.string(), // Validates password as a non-empty string.
    created_at: z.union([z.date(), z.string()]).optional() // Validates created_at as an optional Date object or string.
});
