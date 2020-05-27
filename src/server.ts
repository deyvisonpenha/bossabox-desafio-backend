import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index';
import './database';

const server = express();

server.use(express.json());

server.use(routes);

server.listen(process.env.PORT || 3000);
