import { z } from 'zod';

/**
 * Represents a task object.
 */
export type Task = {
    id?: number; // The unique identifier of the task (optional).
    title: string; // The title of the task.
    description: string; // The description of the task.
    status?: "pending" | "completed"; // The status of the task, can be "pending" or "completed" (optional).
    dateCreated?: Date; // The date when the task was created (optional).
    dateCompleted?: Date; // The date when the task was completed (optional).
    user_id: number; // The user ID associated with the task.
}

/**
 * Schema for validating Task objects.
 */
export const TaskSchema = z.object({
    id: z.number().optional(), // Validates id as an optional number.
    title: z.string(), // Validates title as a non-empty string.
    description: z.string(), // Validates description as a non-empty string.
    dateCreated: z.date().optional(), // Validates dateCreated as an optional Date object.
    dateCompleted: z.date().optional() // Validates dateCompleted as an optional Date object.
});
