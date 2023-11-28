const express = require("express");
const blackout = express.Router({mergeParams: true});

const {getAllBlackoutDates, getBlackoutDateById, createBlackoutDate, deleteBlackout, updateBlackoutDate} = require('../queries/blackoutDates.js')


//SHOW
blackout.get("/", async (req, res) => {
  try {
    const blackout = await getAllBlackoutDates();

    if (blackout && blackout.length > 0) {
      res.status(200).json(blackout);
    } else {
      res.status(404).json({ error: "No blackout found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blackout", details: error.message || error });
  }
});

//SHOW SINGLE
blackout.get("/:blackoutId", async (req, res) => {
  try {
    const { blackoutId } = req.params;

    const blackoutDate = await getBlackoutDateById(blackoutId);

    if (blackoutDate) {
      res.status(200).json(blackoutDate);
    } else {
      res.status(404).json({ error: "Blackout date not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blackout date", details: error.message || error });
  }
});



//CREATE
blackout.post('/', async (req, res) => {
  try {
    const { listingId } = req.params;
    const blackoutDateData = { ...req.body, listing_id: listingId }; 

    const newBlackoutDate = await createBlackoutDate(blackoutDateData);
    res.status(201).json(newBlackoutDate);
  } catch (error) {
    res.status(400).json({ error: "Failed to create blackout date", details: error.message || error });
  }
});



//DELETE
blackout.delete("/:blackoutId", async (req, res) => {
  try {
    const { blackoutId } = req.params;
    const deletedBlackout = await deleteBlackout(blackoutId);
    
    if (deletedBlackout) {
      res.status(200).json(deletedBlackout);
    } else {
      res.status(404).json({ error: "Blackout date not found!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete blackout date", details: error.message || error });
  }
});



// UPDATE
blackout.put("/:blackoutId", async (req, res) => {
  try {
    const { blackoutId } = req.params;
    const updatedBlackout = await updateBlackoutDate(blackoutId, req.body);
    
    if (updatedBlackout) {
      res.status(200).json(updatedBlackout);
    } else {
      res.status(404).json({ error: "Blackout date not found!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update blackout date", details: error.message || error });
  }
});



module.exports = blackout;