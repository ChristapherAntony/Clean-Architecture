import express from 'express';
import mongoose from 'mongoose';
import config from './config/config.js';
import connection from './frameworks/database/mongodb/connection.js';

const app = express()




connection(mongoose, config).connectToMongo()


app.listen(config.port, () => console.log(`Listening in port 3000`))