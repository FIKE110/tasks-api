import { RouterV1 } from "./v1/RouterV1";
import { Router } from "express";
import { NotFoundController } from "../middlewares/RouterMiddleware";

// Create a new router instance for all versions of the API
export const Routers = Router();

// Mount the RouterV1 under the root endpoint '/'
Routers.use('/', RouterV1);

// Catch all unmatched routes and handle with NotFoundController
Routers.use('*', NotFoundController);
