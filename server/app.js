const express = require('express');
const mongoose = require('mongoose');
const homeRoute = require('./routes/home');
const authRoute = require('./routes/auth');
const apiV1Routes = require('./routes/api_v1');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const app = express();
app.use(express.json());

app.use(cors());

app.use('/',homeRoute);     // Home Route
app.use('/auth',authRoute); // Authentication Route
app.use('/api/v1',apiV1Routes);  // api_v1 routes




mongoose.connect("mongodb://localhost:27017/login-signup-backend",() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT | 4000,() => {
        console.log("Server Listening to port 4000");
    });
})