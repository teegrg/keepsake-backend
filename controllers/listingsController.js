const express = require("express");
const listings = express.Router();
const {
  getAllListings,
  getListing,
  createListing,
  deleteListing,
  updateListing,
  getSearchByAsc
} = require("../queries/listings");

const {
  checkStreet,
  checkCity,
  checkState,
  checkZip,
  checkSize,
  checkBoolean
} = require("../validations/checkListings");

const { getBookings } = require("../queries/booked.js")
const {getBlackOutByListingId} = require('../queries/blackoutDates.js')


//LISTING REVIEW CONTROLLER
const listing_reviewController = require("./listing_reviewController.js");
listings.use("/:listingId/reviews", listing_reviewController);

//AVAILABILITY CONTROLLER
const availability = require("./availabilityController.js");
listings.use("/:listingId/availability", availability);

// SEARCH
listings.get("/search", async (req, res) => {
  try {
    const { query } = req.query;

    const searchResults = await getSearchByAsc(query);
    res.status(200).json(searchResults);
  } catch (error) {
    res.status(500).json({ error: "Failed to perform search", details: error.message || error });
  }
});

// INDEX
listings.get("/", async (req, res) => {
  const allItems = await getAllListings();
  if (allItems[0]) {
    res.status(200).json(allItems);
  }
  else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
listings.get("/:id", async (req, res) => {
  const { id } = req.params;
  const item = await getListing(id);
  if (item) {
    res.json(item);
  }
  else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
listings.post("/", checkStreet, checkCity, checkState, checkZip, checkSize, checkBoolean, async (req, res) => {
  try {
    const item = await createListing(req.body);
    res.json(item);
  }
  catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
listings.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedItem = await deleteListing(id);
  if (deletedItem.listing_id) {
    res.status(200).json(deletedItem);
  }
  else {
    res.status(404).json("Listing not found!");
  }
});

// UPDATE
listings.put("/:id", checkStreet, checkCity, checkState, checkZip, checkSize, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedItem = await updateListing(id, req.body);
  res.status(200).json(updatedItem);
});



//GET BLACK OUT DATES FOR LISTING
listings.get("/:listingId/blackout", async (req, res) => {
  try {
    const { listingId } = req.params;
    const blackoutDates = await getBlackOutByListingId(listingId);

    if (blackoutDates && blackoutDates.length > 0) {
      res.status(200).json(blackoutDates);
    } else {
      res.status(404).json({ error: "Blackout dates not found for this listing" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blackout dates", details: error.message || error });
  }
});

//GET BOOKING INFO FROM LISTING
listings.get("/:listingId/bookings", async (req, res) => {
  try {
    const { listingId } = req.params;
    const bookings = await getBookings(listingId);

    if (bookings) {
      res.status(200).json(bookings);
    } else {
      res.status(404).json({ error: "Bookings not found for this listing" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings", details: error.message || error });
  }
});


module.exports = listings;
