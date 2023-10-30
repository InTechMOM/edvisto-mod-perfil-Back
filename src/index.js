const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

//routes
app.get('/', (req, res) =>
res.send("Welcome to my Api"));

//mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("connected to MongoDB Atlas "))
.catch((error) => console.error("error"))

app.listen(port, () => console.log('Server  listening on port', port));

