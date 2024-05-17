import { NextFunction, Request, Response } from "express";
import { Task } from "../models/Task";

/**
 * Middleware to ensure user_id is present in the request body.
 * If user_id is missing, responds with 404 status code and a message.
 * @param req The request object.
 * @param res The response object.
 * @param next The next function in the middleware chain.
 */
export async function getAllTasksMiddleware(req: Request, res: Response, next: NextFunction) {
    if (req.body.user_id) {
        next();
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

/**
 * Middleware to ensure user_id and task id are present in the request.
 * If either user_id or task id is missing, responds with 404 status code and a message.
 * @param req The request object.
 * @param res The response object.
 * @param next The next function in the middleware chain.
 */
export async function getTaskByIdMiddleware(req: Request, res: Response, next: NextFunction) {
    if (req.body.user_id && req.params.id) {
        next();
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

/**
 * Middleware to create a new task or tasks.
 * If task is malformed, responds with a message.
 * @param req The request object.
 * @param res The response object.
 * @param next The next function in the middleware chain.
 */
export async function createTaskMiddleware(req: Request, res: Response, next: NextFunction) {
    const task: Task | Task[] = req.body.task;
    if (task) {
        let newTask;
        if (Array.isArray(task)) {
            newTask = task.map(t => ({ ...t, user_id: req.body.user_id }));
        } else {
            task.user_id = req.body.user_id;
            newTask = task;
        }
        req.body.task = newTask;
        next();
    } else {
        res.json({ message: 'Malformed request' });
    }
};

/**
 * Middleware to update a task.
 * If the request is malformed or the status is not valid, responds with a message.
 * @param req The request object.
 * @param res The response object.
 * @param next The next function in the middleware chain.
 */
export async function updateTaskMiddleware(req: Request, res: Response, next: NextFunction) {
    const { title, description, user_id, status } = req.body;
    const { id } = req.params;
    if (id && user_id && (title || description || status)) {
        if (!status || status == 'pending' || status == 'completed') {
            next();
            return;
        }
        res.json({ message: "status is either pending or completed" });
    } else {
        res.json({ message: 'Malformed request' });
    }
};

/**
 * Middleware to delete a task.
 * If user_id or task id is missing, responds with a message.
 * @param req The request object.
 * @param res The response object.
 * @param next The next function in the middleware chain.
 */
export async function deleteTaskMiddleware(req: Request, res: Response, next: NextFunction) {
    const { user_id } = req.body;
    const { id } = req.params;
    if (id && user_id) {
        next();
    } else {
        res.json({ message: 'Invalid parameters' });
    }
};
