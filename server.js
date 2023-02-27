const express = require('express');


const mongoose = require('mongoose');
mongoose.set('strictQuery', true);





require('dotenv').config();

const connectDB = require('./config/connectDB');

const app = express();



connectDB();


app.use(express.json());
app.use('/users', require('./routes/users'));


const port = process.env.PORT ;

app.listen(port, (err) => err? console.log(err) : console.log('Listening on port'+port))





