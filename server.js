const colors = require('colors');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/error');
const express = require('express');
const fileupload = require('express-fileupload');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/db');

//Load env vars
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

//Load Routes
const bootcamps = require('./routes/bootcamp');
const courses = require('./routes/courses');

const app = express();

const PORT = process.env.PORT || 5000;

//Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// File uploading
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

app.use(errorHandler);

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  server.close(() => process.exit(1));
});
