import { Response, Request, NextFunction } from "express";
import { UserSchema } from "../models/User";

/**
 * Middleware to validate user signup data against the UserSchema.
 * If user data is invalid, responds with an error message.
 * @param req The request object.
 * @param res The response object.
 * @param next The next function in the middleware chain.
 */
export function userSignupMiddleware(req: Request, res: Response, next: NextFunction) {
    const user = req.body;
    try {
        UserSchema.parse(user);
        next();
    } catch (e) {
        // Respond with error status code and message if user data is invalid
        res.status(400).json(e);
    }
}

/**
 * Middleware to ensure username and password are present in the request body for user login.
 * If either username or password is missing, responds with an error message.
 * @param req The request object.
 * @param res The response object.
 * @param next The next function in the middleware chain.
 */
export function userLoginMiddleware(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    if (username && password) {
        next();
    } else {
        // Respond with error status code and message if username or password is missing
        res.status(400).send('Please insert a username or password');
    }
}
