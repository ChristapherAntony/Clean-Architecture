import express from 'express';``
import mongoose from 'mongoose';
import config from './config/config.js';
import connection from './frameworks/database/mongodb/connection.js';
import expressConfig from './frameworks/webserver/express.js';
import serverConfig from './frameworks/webserver/server.js';
import routes from './frameworks/webserver/routes/routes.js';
import errorMiddleware from './frameworks/webserver/middleware/middleware.js';


const app = express()
// express.js configuration (middlewares etc.)
expressConfig(app)

// routes for each endpoint
routes(app, express)


connection(mongoose, config).connectToMongo()

app.use(errorMiddleware); // Use the error handling middleware

serverConfig(app, config).startServer()
