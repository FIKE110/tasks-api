import { Request, Response } from "express";
import { User } from "../models/User";
import { createUserService, loginUserService } from "../services/userservice";
import { sign } from "../services/jwtservice";

// Controller for user signup
export async function userSignupController(req: Request, res: Response) {
    try {
        // Extract user information from the request body
        const newUser: User = req.body;
        // Call the service to create a new user
        const user = await createUserService(newUser);

        // If the user was created successfully, send a success response
        if (user) {
            res.status(201).json({ success: `User ${user.username} created` });
        } else {
            // If the user could not be created, send a 500 (Internal Server Error) status
            res.status(500).json({ error: "Could not create user" });
        }
    } catch (e:any) {
        // If an error occurs, send a 500 (Internal Server Error) status and the error message
        res.status(500).json({ error: e.message || e });
    }
}

// Controller for user login
export async function userLoginController(req: Request, res: Response) {
    try {
        // Extract user login details from the request body
        const user = req.body;
        // Call the service to login the user
        const login = await loginUserService(user);

        // If the login is successful, create a response with user details and a JWT
        if (login) {
            const { id, username, email } = login;
            res.status(200).json({
                user: {
                    id,
                    username,
                    email
                },
                message: 'Login successful',
                accessToken: sign({
                    id: id,
                    email: email
                })
            });
        } else {
            // If login fails, send a 401 (Unauthorized) status
            res.status(401).json({ error: "Invalid username or password" });
        }
    } catch (e:any) {
        // If an error occurs, send a 500 (Internal Server Error) status and the error message
        res.status(500).json({ error: e.message || e });
    }
}
