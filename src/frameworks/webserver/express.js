import express from "express";
import morgan from 'morgan'
import cors from 'cors'
import mongoSanitize from 'express-mongo-sanitize'
import helmet from "helmet";

export default function expressConfig(app) {

    app.use(cors())
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(helmet({ xssFilter: true }))
    app.use(mongoSanitize())

}