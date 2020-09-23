const colors = require('colors');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/error');
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db')

//Load env vars
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

//Load Routes
const bootcamps = require('./routes/bootcamp');

const app = express();

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Body parser
app.use(express.json());

app.use('/api/v1/bootcamps', bootcamps);

app.use(errorHandler);

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  server.close(() => process.exit(1));
});
