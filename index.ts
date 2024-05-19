// Import necessary modules
import 'dotenv/config'; // Loads environment variables from a .env file into process.env
import express from 'express'; // Express framework for building web applications
import cors from 'cors'; // Middleware to enable Cross-Origin Resource Sharing
import { JwtMiddlwareConfig } from './src/configs/jwt.config'; // Custom JWT middleware configuration
import { Routers } from './src/routes/Router'; // Importing the main router module
import morgan from 'morgan'; // HTTP request logger middleware
import expressWs from 'express-ws';
import { webSocketService } from './src/websocket';

// Create an Express application instance
const app = express();
const { app: wsApp, getWss } = expressWs(app);

webSocketService(app)

// Retrieve the port number from environment variables
const port = process.env.PORT || 3000;

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies (as sent by API clients)
app.use(express.json());

// Apply custom JWT middleware for authentication
app.use(JwtMiddlwareConfig);

// Apply CORS middleware to handle cross-origin requests
app.use(cors());

// Morgan middleware for logging HTTP requests
app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res), // HTTP method (GET, POST, etc.)
    tokens.url(req, res), // URL path
    tokens.status(req, res), // HTTP status code
    tokens.res(req, res, 'content-length'), '-', // Response content length
    tokens['response-time'](req, res), 'ms' // Response time in milliseconds
  ].join(' ');
}));

// Add all API routes from the Routers module
app.use(Routers);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});