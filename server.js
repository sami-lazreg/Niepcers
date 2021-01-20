

const express = require("express");
const mongoose= require('mongoose');
const connectDB = require('./config/connectDB');

require('dotenv').config();
const app = express();

connectDB(); //invoking the connection
app.use(express.json()); // to parse the body req










//calling the routes 
app.use('/register', require('./Routes/Register'));
 app.use('/photos', require('./Routes/Photos'));
 app.use('/login', require('./Routes/Login'));



//Starting the server
const port = process.env.PORT || 5000;
app.listen(port , err => {err?console.log(err):console.log(`The Server is Running on Port : http://localhost:${port}`)})