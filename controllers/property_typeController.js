const express = require("express");
const property_type = express.Router();

const {getAllPropertyType} = require('../queries/property_type')


//Index
property_type.get("/", async (req, res) => {
  const propertyType = await getAllPropertyType();
  if (propertyType) {
    res.json(propertyType);
  }
  else {
    res.status(404).json({ error: "not found" });
  }
});

module.exports = property_type;