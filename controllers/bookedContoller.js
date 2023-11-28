const express = require("express");
const booked = express.Router({ mergeParams: true });

const {
    getAllBookings,
    getBookingById,
    createBooking,
    deleteBooking,
    updateBooking,
} = require("../queries/booked.js");

//SHOW ALL BOOKINGS without ID
booked.get("/", async (req, res) => {
    try {
      const bookings = await getAllBookings(); // Assuming you have a function to get all bookings
  
      if (bookings && bookings.length > 0) {
        res.status(200).json(bookings);
      } else {
        res.status(404).json({ error: "No bookings found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch bookings", details: error.message || error });
    }
  });


// SHOW SINGLE booking by ID
booked.get("/:bookingId", async (req, res) => {
    try {
      const { bookingId } = req.params;
  
      const singleBooking = await getBookingById(bookingId);
  
      if (singleBooking) {
        res.status(200).json(singleBooking);
      } else {
        res.status(404).json({ error: "Booking not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch booking", details: error.message || error });
    }
  });
  

// CREATE a new booking
booked.post("/", async (req, res) => {
    try {
      const bookingData = req.body;
  
      const newBooking = await createBooking(bookingData);
      res.status(201).json(newBooking);
    } catch (error) {
      res.status(400).json({ error: "Failed to create booking", details: error.message || error });
    }
  });
  

// DELETE a booking by ID
booked.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBooking = await deleteBooking(id);
  
      if (deletedBooking) {
        res.status(200).json(deletedBooking);
      } else {
        res.status(404).json({ error: "Booking not found!" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete booking", details: error.message || error });
    }
  });
  

// UPDATE a booking by ID
booked.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updatedBooking = await updateBooking(id, req.body);
  
      if (updatedBooking) {
        res.status(200).json(updatedBooking);
      } else {
        res.status(404).json({ error: "Booking not found!" });
      }
    } catch (error) {
      res.status(400).json({ error: "Failed to update booking", details: error.message || error });
    }
  });
  
module.exports = booked;
