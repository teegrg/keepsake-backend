  const express = require("express");
  const property_type = express.Router({mergeParams: true});

  const { getOnePropertyType} = require('../queries/property_type')


  //GET PROPERTY LIST
  property_type.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const propertyType = await getOnePropertyType(id);
      if (propertyType) {
        res.json(propertyType);
      } else {
        res.status(404).json({ error: "Property type not found" });
      }
    } catch (error) {
      console.error("Error in property_type GET by ID:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  module.exports = property_type;