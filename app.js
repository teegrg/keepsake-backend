//DEPENDENCIES
const cors = require('cors');
const express = require('express');

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors())
app.use(express.json());

//ROUTES
app.get('/', (req, res) => {
    res.send("Welcome to KEEPSAKE!");
})

// LISTINGS ROUTES
const listings = require("./controllers/listingsController");
app.use("/listings", listings);

app.get("*", (req, res) => {
    res.status(404).send("Page not found!");
})

//EXPORT
module.exports = app