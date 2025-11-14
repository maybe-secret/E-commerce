const express = require('express');
const { connectDB } = require('./config/db');
const app = express();
require('dotenv').config();


port = process.env.PORT;

connectDB();

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
})