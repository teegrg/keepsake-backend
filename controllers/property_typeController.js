const express = require("express");
const property_type = express.Router({mergeParams: true});

const {getAllPropertyType} = require('../queries/property_type')


// // SHOW
property_type.get("/", async (req, res) => {
  const { listingId } = req.params;
  const propertyType = await getAllPropertyType(listingId);
  if (propertyType) {
    res.json(propertyType);
  }
  else {
    res.status(404).json({ error: "not found" });
  }
});

module.exports = property_type;