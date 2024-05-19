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
    git clone https://github.com/your-username/task-management-api.git
    ```
2. **Install Dependencies**: 
    ```
    cd task-management-api
       npm install
    ```
3. **Set Up Database**: Configure and set up the database connection in the `database/` directory.
4. **Start the Server**: 
    ```
    npm start
    ```
5. **Access the API**: The API will be accessible at `http://localhost:3000/api`.


## API Documentation

Detailed API documentation including endpoints, request/response formats, and usage instructions can be found in the code comments and respective endpoint implementations.

# Task Management and User Authentication API

This API provides endpoints for managing tasks and handling user authentication. Below are the routes available in the API along with their respective HTTP methods, endpoints, middlewares, and controllers.

## Task Routes

### Retrieve All Tasks
- **Method:** `GET`
- **Endpoint:** `/`
- **Middleware:** `getAllTasksMiddleware`
- **Controller:** `getAllTasksController`

### Retrieve a Task by ID
- **Method:** `GET`
- **Endpoint:** `/:id`
- **Middleware:** `getTaskByIdMiddleware`
- **Controller:** `getTaskByIdController`

### Create a New Task
- **Method:** `POST`
- **Endpoint:** `/`
- **Middleware:** `createTaskMiddleware`
- **Controller:** `createTaskController`

### Update a Task by ID
- **Method:** `PUT`
- **Endpoint:** `/update/:id`
- **Middleware:** `updateTaskMiddleware`
- **Controller:** `updateTaskController`

### Delete a Task by ID
- **Method:** `DELETE`
- **Endpoint:** `/delete/:id`
- **Middleware:** `deleteTaskMiddleware`
- **Controller:** `deleteTaskController`

## User Routes

### User Login
- **Method:** `POST`
- **Endpoint:** `/login`
- **Middleware:** `userLoginMiddleware`
- **Controller:** `userLoginController`

### User Registration
- **Method:** `POST`
- **Endpoint:** `/register`
- **Middleware:** `userSignupMiddleware`
- **Controller:** `userSignupController`

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



## Contributing

Contributions are welcome! Please refer to the [CONTRIBUTING.md] file for guidelines.

## License

This project is licensed under the [MIT License]. See the [LICENSE.md] file for details.

## Contact

For any inquiries or support, please contact chihrumikechukwu05@gmail.com.

database of choice: # (MySQL)
