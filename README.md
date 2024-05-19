# Task Management API

This project implements a RESTful API for a simple task management system, providing features such as user authentication, CRUD operations for tasks, data persistence, input validation, and real-time data streaming through WebSocket.

## Features

- **User Authentication**: Implemented using JWT tokens for secure access to API endpoints.
- **CRUD Operations**: Endpoints provided for creating, reading, updating, and deleting tasks.
- **Data Persistence**: Task data is stored in a Mysql
- **Input Validation**: Input data is validated to ensure data integrity and security.
- **Real-time Streaming**: Real-time updates are streamed through WebSocket.

## Technologies Used

- Node.js
- Express.js
- JWT (JSON Web Tokens)
- Mysql
- kysely (Query builder)
- WebSocket (for real-time streaming)

## Project Structure

-project-root/
- controllers/ # Controllers for handling API endpoints logic
- middlewares/ # Middlewares for authentication, input validation, etc.
- models/ # Data models/schema definitions
- routes/ # Route definitions for API endpoints
- utils/ # Utility functions
- websocket/# for websocket
- database/ # Database configuration and connection setup
- app.js # Main application entry point
- README.md # Project documentation


## Setup Instructions

1. **Clone the Repository**: 
    ```
    git clone https://github.com/FIKE110/tasks-api.git
    ```
2. **Install Dependencies**: 
    ```
    cd task-management-api
       npm install
    ```
3. **Set Up Database**: Configure and set up the database connection in the `database.ts`.
4. **Start the Server**: 
    ```
    npm start
    ```
5. **Access the API**: The API will be accessible at `http://localhost:3000/tasks`.


## API Documentation

Detailed API documentation including endpoints, request/response formats, and usage instructions can be found in the code comments and respective endpoint implementations.

# Task Management and User Authentication API

This API provides endpoints for managing tasks and handling user authentication. Below are the routes available in the API along with their respective HTTP methods, endpoints, middlewares, and controllers.

## Task Routes

## All Task Route Uses Bearer Token for Authoratization e.g
- header{
    Authoraization:Bearer [jwt gotten from login (http://localhost/users/login)]
} 
# Task Management and User Authentication API

This API provides endpoints for managing tasks and handling user authentication. JWT (JSON Web Tokens) are used for secure authentication. Below are the routes available in the API along with their respective HTTP methods, endpoints, middlewares, controllers, and authorization requirements.

## Task Routes

1. **Retrieve All Tasks**
   - **Method:** `GET`
   - **Endpoint:** `tasks/`
   - **Middleware:** `authMiddleware`, `getAllTasksMiddleware`
   - **Controller:** `getAllTasksController`
   - **Authorization:** Bearer Token required in the `Authorization` header

2. **Retrieve a Task by ID**
   - **Method:** `GET`
   - **Endpoint:** `tasks/:id`
   - **Middleware:** `authMiddleware`, `getTaskByIdMiddleware`
   - **Controller:** `getTaskByIdController`
   - **Authorization:** Bearer Token required in the `Authorization` header

3. **Create a New Task**
   - **Method:** `POST`
   - **Endpoint:** `tasks/`
   - **Middleware:** `authMiddleware`, `createTaskMiddleware`
   - **Controller:** `createTaskController`
   - **Authorization:** Bearer Token required in the `Authorization` header

4. **Update a Task by ID**
   - **Method:** `PUT`
   - **Endpoint:** `tasks/update/:id`
   - **Middleware:** `authMiddleware`, `updateTaskMiddleware`
   - **Controller:** `updateTaskController`
   - **Authorization:** Bearer Token required in the `Authorization` header

5. **Delete a Task by ID**
   - **Method:** `DELETE`
   - **Endpoint:** `tasks/delete/:id`
   - **Middleware:** `authMiddleware`, `deleteTaskMiddleware`
   - **Controller:** `deleteTaskController`
   - **Authorization:** Bearer Token required in the `Authorization` header

## User Routes

1. **User Login**
   - **Method:** `POST`
   - **Endpoint:** `users/login`
   - **Middleware:** `userLoginMiddleware`
   - **Controller:** `userLoginController`
   - **Authorization:** No token required

2. **User Registration**
   - **Method:** `POST`
   - **Endpoint:** `users/register`
   - **Middleware:** `userSignupMiddleware`
   - **Controller:** `userSignupController`
   - **Authorization:** No token required

3. **WebSocket Route**
    - Use /ws [to be updated on active creation of data to the database]


## How to Use Bearer Token

For routes that require authorization, you must include the Bearer Token in the `Authorization` header of your HTTP request. Here's an example of how to include the Bearer Token:

### Example Request with Bearer Token

```http
GET /tasks HTTP/1.1
Host: your-api-domain.com
Authorization: Bearer your_jwt_token


## Middleware

### Task Middlewares
- **getAllTasksMiddleware:** Middleware for retrieving all tasks.
- **getTaskByIdMiddleware:** Middleware for retrieving a task by its ID.
- **createTaskMiddleware:** Middleware for creating a new task.
- **updateTaskMiddleware:** Middleware for updating a task by its ID.
- **deleteTaskMiddleware:** Middleware for deleting a task by its ID.

### User Middlewares
- **userLoginMiddleware:** Middleware for handling user login validation.
- **userSignupMiddleware:** Middleware for handling user registration validation.

## Controllers

### Task Controllers
- **getAllTasksController:** Controller for retrieving all tasks.
- **getTaskByIdController:** Controller for retrieving a task by its ID.
- **createTaskController:** Controller for creating a new task.
- **updateTaskController:** Controller for updating a task by its ID.
- **deleteTaskController:** Controller for deleting a task by its ID.

### User Controllers
- **userLoginController:** Controller for handling user login.
- **userSignupController:** Controller for handling user registration.

### env variables to set

- PORT
- JWTSECRETKEY
- WEBSOCKETPORT=4000
- DBURI
- FRONTSALT
- BACKSALT
- TOKENDURATION
- DBNAME
- DBHOST
- DBUSER
- DBPASSWORD
- DBPORT



## Contributing

Contributions are welcome! Please refer to the [CONTRIBUTING.md] file for guidelines.

## License

This project is licensed under the [MIT License]. See the [LICENSE.md] file for details.

## Contact

For any inquiries or support, please contact chihrumikechukwu05@gmail.com.

database of choice: # (MySQL)
