const express = require("express");
const availability = express.Router({mergeParams: true});

const {getAvailability} = require('../queries/availability')


// // SHOW
availability.get("/", async (req, res) => {
  const { listingId } = req.params;
  const availability = await getAvailability(listingId);
  if (availability) {
    res.json(availability);
  }
  else {
    res.status(404).json({ error: "not found" });
  }
});

module.exports = availability;