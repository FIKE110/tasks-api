import { Request, Response, NextFunction } from "express";

/**
 * Controller for handling 404 Not Found errors.
 * @param req The request object.
 * @param res The response object.
 */
export function NotFoundController(req: Request, res: Response) {
    console.log(req.body.payload);
    // Respond with 404 status code and a message
    res.status(404).json({ message: '404 NOT FOUND' });
}

/**
 * Middleware to parse payload and set user_id and email in request body.
 * If id and email are not present in the payload, responds with an appropriate message.
 * @param req The request object.
 * @param res The response object.
 * @param next The next function in the middleware chain.
 */
export function parsePayloadMiddleware(req: Request, res: Response, next: NextFunction) {
    const { id, email } = req.body.payload;
    console.log(req.body.payload);
    if (id && email) {
        // Set user_id and email in request body
        req.body.user_id = id;
        req.body.email = email;
        next(); // Proceed to next middleware
    } else {
        // Respond with 400 Bad Request status code and a message if id or email is missing
        res.status(400).json({ message: 'Bad Request: User not Found' });
    }
}
