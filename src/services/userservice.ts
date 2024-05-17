import { ReturningNode } from "kysely";
import { User } from "../models/User";
import { createUser, findUserByUsername, findUserByUsernameAndPassword } from "../repository/userrepository";

/**
 * Service function to create a new user.
 * @param user The user object to be created.
 * @returns A promise that resolves to the created user if successful.
 * @throws If a user with the same username already exists.
 */
export async function createUserService(user: User) {
    const usersWithUsername = await findUserByUsername(user.username);
    if (usersWithUsername) {
        throw("User already exists");
    } else {
        return await createUser(user);
    }
}

/**
 * Service function to authenticate user login.
 * @param user An object containing the username and password for login.
 * @returns A promise that resolves to the authenticated user if successful.
 * @throws If the provided username and password combination is invalid.
 */
export async function loginUserService(user: any) {
    const { username, password } = user;
    const dbUser = await findUserByUsernameAndPassword(username, password);
    if (dbUser) return dbUser;
    throw('Username and password are invalid');
}
