const db = require("../db/dbConfig.js");

const getAllBookings = async () => {
    try {
      const bookings = await db.any("SELECT * FROM booked");
      return bookings;
    } catch (error) {
      console.error("Error in getAllBookings query:", error.message || error);
      throw error;
    }
  };

const getBookings = async (listingId) => {
    try {
      const bookings = await db.any('SELECT * FROM booked WHERE listing_id = $1', listingId);
      return bookings;
    } catch (error) {
      console.error('Error in getBookings query:', error.message || error);
      throw error;
    }
  };


const getBookingById = async (bookingId) => {
    try {
        const singleBooking = await db.oneOrNone("SELECT * FROM booked WHERE id = $1", bookingId);
        return singleBooking;
    } catch (error) {
        console.error("Error in getBookingById query:", error.message || error);
        throw error;
    }
};

const createBooking = async (bookingData) => {
    try {
      const newBooking = await db.one(
        "INSERT INTO booked (user_id, listing_id, blackoutdate_id, total, status, request) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [
          bookingData.user_id,
          bookingData.listing_id,
          bookingData.blackoutdate_id,
          bookingData.total,
          bookingData.status,
          bookingData.request,
        ]
      );
      return newBooking;
    } catch (error) {
      console.error("Error in createBooking query:", error.message || error);
      throw error;
    }
  };
  

const deleteBooking = async (id) => {
  try {
    const deletedBooking = await db.one("DELETE FROM booked WHERE id = $1 RETURNING *", id);
    return deletedBooking;
  } catch (error) {
    console.error("Error in deleteBooking query:", error.message || error);
    throw error;
  }
};

const updateBooking = async (id, bookingData) => {
    try {
      const updatedBooking = await db.one(
        "UPDATE booked SET user_id=$1, listing_id=$2, blackoutdate_id=$3, total=$4, status=$5, request=$6 WHERE id=$7 RETURNING *",
        [
          bookingData.user_id,
          bookingData.listing_id,
          bookingData.blackoutdate_id,
          bookingData.total,
          bookingData.status,
          bookingData.request,
          id,
        ]
      );
      return updatedBooking;
    } catch (error) {
      console.error("Error in updateBooking query:", error.message || error);
      throw error;
    }
  };
  

const getUserBookings = async (userId) => {
    try {
      const userBookings = await db.any('SELECT * FROM booked WHERE user_id = $1', userId);
      return userBookings;
    } catch (error) {
      console.error("Error in getUserBookings query:", error.message || error);
      throw error;
    }
  };

module.exports = {
    getAllBookings,
  getBookings,
  getBookingById,
  getUserBookings,
  createBooking,
  deleteBooking,
  updateBooking,
};
