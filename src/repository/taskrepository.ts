import { getMySQLTimestamp } from "../configs/sql.config";
import { db } from "../database";
import { Task } from "../models/Task";
import { broadcast, wss } from "../websocket";

/**
 * Retrieves all tasks associated with a user from the database.
 * @param user_id The ID of the user whose tasks are to be retrieved.
 * @returns A promise that resolves to the result of the database query.
 */
export const getAllTasks = async (user_id: number) => {
  const result = await db.selectFrom('tasks')
    .selectAll()
    .where('user_id', '=', user_id)
    .execute();
  return result;
};

/**
 * Retrieves a task by its ID and associated user ID from the database.
 * @param id The ID of the task to retrieve.
 * @param user_id The ID of the user associated with the task.
 * @returns A promise that resolves to the result of the database query.
 */
export const getTaskById = async (id: number, user_id: number) => {
  const result = await db.selectFrom('tasks')
    .selectAll()
    .where('user_id', '=', user_id)
    .where('id', '=', id)
    .executeTakeFirst();
  
  return result;
};

/**
 * Creates a new task or tasks in the database.
 * @param task The task or array of tasks to be created.
 * @returns A promise that resolves to the result of the database insertion operation.
 */
export const createTask = async (task: Task | Task[]) => {
  const result = await db.insertInto('tasks')
    .values(task)
    .execute();
  if(result) broadcast(JSON.stringify(task))
  return result;
};

/**
 * Updates an existing task in the database.
 * @param id The ID of the task to update.
 * @param title The new title for the task.
 * @param description The new description for the task.
 * @param status The new status for the task (either 'pending' or 'completed').
 * @param user_id The ID of the user associated with the task.
 * @returns A promise that resolves to the number of rows updated in the database.
 */
export const updateTask = async (id: number, title: string, description: string, status: 'pending' | 'completed', user_id: number) => {
  const result = await db.updateTable('tasks')
    .set(status == 'completed' ? {
      title, description, status, dateCompleted: getMySQLTimestamp()
    } : {
      title, description, status: 'pending', dateCompleted: null
    })
    .where('id', '=', id)
    .where('user_id', '=', user_id)
    .executeTakeFirst();
  
  return result.numUpdatedRows;
};

/**
 * Deletes a task from the database.
 * @param id The ID of the task to delete.
 * @param user_id The ID of the user associated with the task.
 * @returns A promise that resolves to the result of the database deletion operation.
 */
export const deleteTask = async (id: number, user_id: number) => {
  const result = await db.deleteFrom('tasks')
    .where('user_id', '=', user_id)
    .where('id', '=', id)
    .execute();
  
  return result;
};
