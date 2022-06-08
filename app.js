const dotenv = require("dotenv")
const database = require("./config/database");
const express = require("express");


dotenv.config();
database.connect();
const app = express();

//app.use(express.urlencoded());
app.use(express.json());



module.exports = app;