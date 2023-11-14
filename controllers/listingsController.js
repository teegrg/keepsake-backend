const express = require("express");
const listings = express.Router();
const {
  getAllListings,
  getListing,
  createListing,
  deleteListing,
  updateListing
} = require("../queries/listings");

const {
  checkStreet,
  checkCity,
  checkState,
  checkZip,
  checkSize,
  checkBoolean
} = require("../validations/checkListings");


//LISTING REVIEW CONTROLLER
const listing_reviewController = require("./listing_reviewController.js");
listings.use("/:listingId/reviews", listing_reviewController);

//AVAILABILITY CONTROLLER
const availability = require("./availabilityController.js");
listings.use("/:listingId/availability", availability);

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
  if (deletedItem.id) {
    res.status(200).json(deletedItem);
  }
  else {
    res.status(404).json("Song not found!");
  }
});

// UPDATE
listings.put("/:id", checkStreet, checkCity, checkState, checkZip, checkSize, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedItem = await updateListing(id, req.body);
  res.status(200).json(updatedItem);
});

module.exports = listings;
