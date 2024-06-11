
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// const bodyParser = require('body-parser'); // No need for bodyParser in Express 4.x

const templateRoute = require('./routes/templateRoute');

const connectDB = require('./database/db');

connectDB();

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/templates', templateRoute);


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  connectDB();
});