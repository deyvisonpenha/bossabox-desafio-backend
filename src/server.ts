import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

require('dotenv').config();

const app = express();

mongoose.connect(`${process.env.MongoUrl}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333);
