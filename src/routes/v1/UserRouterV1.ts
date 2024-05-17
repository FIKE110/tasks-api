import { Router } from "express";
import { userLoginMiddleware, userSignupMiddleware } from "../../middlewares/UserMiddleware";
import { userLoginController, userSignupController } from "../../controllers/UserController";

// Create a new router instance for version 1 of the User API
export const UserRouterV1 = Router();

// Route to handle user login
UserRouterV1.post('/login', userLoginMiddleware, userLoginController);

// Route to handle user registration
UserRouterV1.post('/register', userSignupMiddleware, userSignupController);
