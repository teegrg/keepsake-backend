const express = require("express");
const blackout = express.Router({mergeParams: true});

const {getBlackOut, createBlackoutDate, deleteBlackout, updateBlackoutDate} = require('../queries/blackoutDates.js')


//SHOW
blackout.get("/", async (req, res) => {
    const { listingId } = req.params;
    const availability = await getBlackOut(listingId);
    if (availability) {
      res.json(availability);
    }
    else {
      res.status(404).json({ error: "not found" });
    }
  });


//CREATE
blackout.post('/', async (req, res) => {
try {
    const listingId = req.params.listingId;
    const blackoutDateData = { ...req.body, listing_id: listingId }; 

    const newBlackoutDate = await createBlackoutDate(blackoutDateData);
    res.json(newBlackoutDate);
} catch (error) {
    res.status(400).json({ error: "Failed to create blackout date", details: error.message || error });
}
});

//DELETE
blackout.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedBlackout = await deleteBlackout(id);
    if (deletedBlackout.id) {
      res.status(200).json(deletedBlackout);
    }
    else {
      res.status(404).json("Song not found!");
    }
  });


// UPDATE
blackout.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updated = await updateBlackoutDate(id, req.body);
    res.status(200).json(updated);
});  


module.exports = blackout;