//DEPENDENCIES
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser')
const passport = require('passport')
const {CLIENT_URL} = require('./constants/index.js')

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors({origin:CLIENT_URL, credentials:true}));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

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

app.get("*", (req, res) => {
    res.status(404).send("Page not found!");
});

//EXPORT
module.exports = app;
