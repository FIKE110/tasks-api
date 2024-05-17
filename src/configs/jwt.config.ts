import { expressjwt } from "express-jwt";
import { Request, Response } from "express";
import { decode, verify } from "../services/jwtservice";

// Configuration for JWT middleware
export const JwtMiddlwareConfig = expressjwt({
  // Secret key for signing JWTs, fetched from environment variables
  secret: process.env.JWTSECRETKEY as string,
  
  // Algorithms to be used for verifying the JWTs
  algorithms: ["HS256"],
  
  // Whether the credentials (JWT) are required
  credentialsRequired: true,
  
  // Whether to ignore the expiration date of the JWT
  ignoreExpiration: false,
  
  // Function to extract the JWT from the request
  getToken: function fromHeaderOrQuerystring(req: Request) {
    // Check if the authorization header is present and formatted correctly
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
      // Extract the token from the authorization header
      req.body.jwtToken = req.headers.authorization.split(" ")[1];
      // Decode the token and store the payload in the request body
      req.body.payload = decode(req.body.jwtToken);
      return req.body.jwtToken;
    } 
    // Check if the token is present in the query parameters
    else if (req.query && req.query.token) {
      req.body.jwtToken = req.query.token;
      // Decode the token and store the payload in the request body
      req.body.payload = decode(req.body.jwtToken);
      return req.query.token;
    }
    // Throw an error if the token is not found in either location
    throw 'Not Authorized: Bearer token not found';
  },
  
  // Function to handle expired tokens
  onExpired: () => {
    throw 'Not Authorized: Expired Token';
  },
  
  // Maximum age of the token in seconds (24 hours)
  maxAge: 3600 * 24
}).unless({ 
  // Paths that do not require authentication
  path: ['/users/login', '/users/register'] 
});
