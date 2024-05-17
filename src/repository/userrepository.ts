import { db } from "../database";
import { User } from "../models/User";

/**
 * Creates a new user in the database.
 * @param user The user object to be created.
 * @returns A promise that resolves to the result of the database insertion operation.
 */
export async function createUser(user: User) {
   await db.insertInto('users').values(user).executeTakeFirst();
   return await findUserByUsername(user.username);
}

/**
 * Finds a user by their ID in the database.
 * @param id The ID of the user to find.
 * @returns A promise that resolves to the user object if found, otherwise null.
 */
export async function findUserById(id: number) {
    return await db.selectFrom('users').select(['id', 'email', 'username']).where('id', '=', id).executeTakeFirst();
}

/**
 * Finds a user by their username in the database.
 * @param username The username of the user to find.
 * @returns A promise that resolves to the user object if found, otherwise null.
 */
export async function findUserByUsername(username: string) {
    return await db.selectFrom('users').select(['id', 'email', 'username']).where('username', '=', username).executeTakeFirst();
}

/**
 * Finds a user by their username and password in the database.
 * @param username The username of the user to find.
 * @param password The password of the user to find.
 * @returns A promise that resolves to the user object if found, otherwise null.
 */
export async function findUserByUsernameAndPassword(username: string, password: string) {
    return await db.selectFrom('users').select(['id', 'username', 'email'])
        .where('username', '=', username)
        .where('password', '=', password)
        .executeTakeFirst();
}
