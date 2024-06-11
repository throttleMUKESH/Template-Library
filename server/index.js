import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import templateRoute from './routes/templateRoute.js';

import connectDB from './database/db.js';

connectDB();

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/templates', templateRoute);


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  connectDB();
});
