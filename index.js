const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
require("./config/database");

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port 
const PORT = process.env.PORT || 5000;

// use cors
app.use(cors());


//import routes
const groceryItemRoute = require('./routes/itemRoute');


app.use('/', groceryItemRoute);



//connect to server
app.listen(PORT, ()=> console.log("Server connected") );