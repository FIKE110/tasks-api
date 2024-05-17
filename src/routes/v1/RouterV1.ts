import { Router } from 'express';
import { UserRouterV1 } from './UserRouterV1';
import { TaskRouterV1 } from './TaskRouterV1';
import { parsePayloadMiddleware } from '../../middlewares/RouterMiddleware';

// Create a new router instance for version 1 of the API
export const RouterV1 = Router();

// Mount the UserRouterV1 under the /users endpoint
RouterV1.use('/users', UserRouterV1);

// Mount the TaskRouterV1 under the /tasks endpoint and apply the parsePayloadMiddleware
RouterV1.use('/tasks', parsePayloadMiddleware, TaskRouterV1);
