// imports
const path = require("path");
const express = require("express");
const cors = require("cors");
const connectionToMongoDB = require("./config/database");
const usersRoutes = require("./routes/users");

// server inintialize
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/users", usersRoutes);
app.use(express.static(path.join(__dirname, 'public')))

// database
const myDataBase = "myDB";
const url = `mongodb://localhost:27017/${myDataBase}`;

connectionToMongoDB(url);

// server export
module.exports = app;