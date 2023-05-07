import express from 'express';
import mongoose from 'mongoose';
import config from './config/config.js';

const app = express()








try {
    await mongoose.connect(config.mongo.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('MongoDB connected');
} catch (error) {
    console.log('MongoDB connection error:', error);
}



app.listen(config.port, () => console.log(`Listening in port 3000`))