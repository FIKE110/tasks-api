import {
  ColumnType,
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable
} from 'kysely';

/**
 * Represents the database structure.
 */
export interface Database {
  users: UserTable, // The table structure for users
  tasks: TaskTable // The table structure for tasks
}

/**
 * Represents the table structure for users.
 */
export interface UserTable {
  id?: Generated<number>, // The auto-generated ID of the user
  username: string, // The username of the user
  email: string, // The email address of the user
  password: string, // The password of the user
  created_at?: Date | string // The date when the user was created
}

/**
 * Represents the table structure for tasks.
 */
export interface TaskTable {
  id?: Generated<number>, // The auto-generated ID of the task
  user_id: number, // The ID of the user associated with the task
  title: string, // The title of the task
  description: string, // The description of the task
  status?: 'pending' | 'completed', // The status of the task
  dateCreated ?: Date | string, // The date when the task was created
  dateCompleted ?: Date | string | null // The date when the task was completed (if applicable)
}
