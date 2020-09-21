const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

//Load Routes
const bootcamps = require('./routes/bootcamp');

//Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: `Show bootcamps` });
});

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
