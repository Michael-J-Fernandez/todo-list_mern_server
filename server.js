const express = require("express");
const mongoose = require("mongoose");

const app = express()
require("dotenv").config();

const URI = process.env.ATLAS_URI;
const PORT = process.env.PORT || 5001;

// mongoose.connect(URI);

app.get('/', (req, res) => {
    res.send('Hello GET request!')
})



app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`)
})