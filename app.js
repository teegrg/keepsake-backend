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

// USER ROUTES
const users = require("./controllers/userController");
app.use("/users", users);

// LISTINGS ROUTES
const listings = require("./controllers/listingsController");
app.use("/listings", listings);


// Reviews ROUTES
const user_reviewController = require("./controllers/user_reviewController.js");
app.use("/userReviews", user_reviewController);

const listing_reviewController = require("./controllers/listing_reviewController.js");
app.use("/listingReviews", listing_reviewController);


// //PROPERTY_TYPE ROUTE
// const property_typeController = require("./controllers/property_typeController.js");
// app.use("/property_type, property_typeController");

//404 ROUTE
app.get("*", (req, res) => {
    res.status(404).send("Page not found!");
});

//EXPORT
module.exports = app;
