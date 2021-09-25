const express = require('express');
const dotenv = require('dotenv');
const ejs = require('ejs');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const fileupload = require('express-fileupload');


//  * load env variables
dotenv.config({path: './config/config.env'});

// * load Route files
// const restaurants = require('./routes/restaurants');
// const servings = require('./routes/servings');

// *  initialize app
const app = express();

//Serving Static Files
app.use(express.static("public"));

//Body parser
app.use(express.json());

// Setup the the template engine
app.set('view engine','ejs');

// File uploading
app.use(fileupload());

// Development terminal logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
//Connect database;
connectDB();
// serving the home page
app.get ('/', (req, res) => {
  res.render('index');
})

// Mount routers
// app.use('/api/v1/restaurants', restaurants);
// app.use('/api/v1/servings', servings);

// custom error handler
app.use(errorHandler);
//Run the Server
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline));
// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
   // Close server & exit process
    server.close(() => process.exit(1));
  });

