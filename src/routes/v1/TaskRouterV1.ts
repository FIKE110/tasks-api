import { Router } from 'express';
import { createTaskController, deleteTaskController, getAllTasksController, getTaskByIdController, updateTaskController } from '../../controllers/TaskController';
import { createTaskMiddleware, deleteTaskMiddleware, getAllTasksMiddleware, getTaskByIdMiddleware, updateTaskMiddleware } from '../../middlewares/TaskMiddleware';

// Create a new router instance for version 1 of the Task API
export const TaskRouterV1 = Router();

// Route to get all tasks
TaskRouterV1.get('/', getAllTasksMiddleware, getAllTasksController);

// Route to get a task by ID
TaskRouterV1.get('/:id', getTaskByIdMiddleware, getTaskByIdController);

// Route to create a new task
TaskRouterV1.post('/', createTaskMiddleware, createTaskController);

// Route to update a task by ID
TaskRouterV1.put('/update/:id', updateTaskMiddleware, updateTaskController);

// Route to delete a task by ID
TaskRouterV1.delete('/delete/:id', deleteTaskMiddleware, deleteTaskController);
