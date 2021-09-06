const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

// load env variables
dotenv.config({path: './config/config.env'});

//load Route files
const restaurants = require('./routes/restaurants');

// initialze app
const app = express();


// Development terminal logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }


//Connect database;
connectDB();


// Mount routers
app.use('/api/v1/restaurants', restaurants);





//Run the Server
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline));


// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
   // Close server & exit process
    server.close(() => process.exit(1));
  });

