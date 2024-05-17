import express from 'express';
import expressWs from 'express-ws';
import { Express } from 'express';
import { WebSocketServer, WebSocket } from 'ws';

// Webserver socket variable
export let wss: WebSocketServer;

// Function to initialize the WebSocket service
export function webSocketService(app: Express) {
    const { app: wsApp, getWss } = expressWs(app);
    wss = getWss();

    // WebSocket endpoint
    wsApp.ws('/ws', (ws) => {
        console.log('Client connected');

        ws.on('open', () => {
            console.log('Socket is opened');
        });

        ws.on('message', (message) => {
            console.log(`Received message: ${message}`);
            ws.send(`Echo: ${message}`);
        });

        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });
}

// Function to broadcast messages to all connected clients
export function broadcast(message: string) {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(`Broadcast: ${message}`);
        }
    });
}
