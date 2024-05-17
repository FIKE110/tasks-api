// Task Controller
// Contains functions that handle requests concerning tasks

import { Request, Response, NextFunction } from "express";
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "../repository/taskrepository";

// Controller to get all tasks for a user
export async function getAllTasksController(req: Request, res: Response) {
    try {
        // Retrieve user_id from the request body
        const tasks = await getAllTasks(req.body.user_id);
        // Respond with the list of tasks in JSON format
        res.status(200).json(tasks);
    } catch (e:any) {
        // If an error occurs, send a 500 (Internal Server Error) status and the error message
        res.status(500).json({ error: e.message || e });
    }
}

// Controller to get a task by its ID
export async function getTaskByIdController(req: Request, res: Response) {
    try {
        // Retrieve task ID from the request parameters
        const { id }: any = req.params;
        // Retrieve user_id from the request body
        const task = await getTaskById(id, req.body.user_id);
        
        if (task) {
            // Respond with the task in JSON format
            res.status(200).json(task);
        } else {
            // If the task is not found, send a 404 (Not Found) status
            res.status(404).json({ error: "Task not found" });
        }
    } catch (e:any) {
        // If an error occurs, send a 500 (Internal Server Error) status and the error message
        res.status(500).json({ error: e.message || e });
    }
}

// Controller to create a new task
export async function createTaskController(req: Request, res: Response) {
    try {
        // Retrieve task details from the request body
        const task = req.body.task;
        // Attempt to create the task
        const taskCreated = await createTask(task);

        if (taskCreated) {
            // Respond with a success message and status 201 (Created)
            res.status(201).json({ message: "Task has been created" });
        } else {
            // If the task could not be created, send a 500 (Internal Server Error) status
            res.status(500).json({ error: "Could not create task" });
        }
    } catch (e:any) {
        // If an error occurs, send a 500 (Internal Server Error) status and the error message
        res.status(500).json({ error: e.message || e });
    }
}

// Controller to update an existing task
export async function updateTaskController(req: Request, res: Response) {
    try {
        // Retrieve task details from the request body
        const { user_id, title, description, status } = req.body;
        // Retrieve task ID from the request parameters
        const { id }: any = req.params;
        // Attempt to update the task
        const taskUpdated = await updateTask(id, title, description, status, user_id);

        if (taskUpdated) {
            // Respond with a success message and status 200 (OK)
            res.status(200).json({ message: "Task has been updated" });
        } else {
            // If the task could not be updated, send a 500 (Internal Server Error) status
            res.status(500).json({ error: "Could not update task" });
        }
    } catch (e:any) {
        // If an error occurs, send a 500 (Internal Server Error) status and the error message
        res.status(500).json({ error: e.message || e });
    }
}

// Controller to delete a task
export async function deleteTaskController(req: Request, res: Response) {
    try {
        // Retrieve user_id from the request body
        const { user_id } = req.body;
        // Retrieve task ID from the request parameters
        const { id }: any = req.params;
        // Attempt to delete the task
        const taskDeleted = await deleteTask(id, user_id);

        if (taskDeleted) {
            // Respond with a success message and status 200 (OK)
            res.status(200).json({ message: "Task has been deleted" });
        } else {
            // If the task could not be deleted, send a 500 (Internal Server Error) status
            res.status(500).json({ error: "Could not delete task" });
        }
    } catch (e:any) {
        // If an error occurs, send a 500 (Internal Server Error) status and the error message
        res.status(500).json({ error: e.message || e });
    }
}
