const db = require("../db/dbConfig.js");

//GET DATES FOR LISTING

const getBlackOut = async (id) => {
    try {
        const blackout = await db.any("SELECT * FROM blackoutDates WHERE listing_id=$1", id);
        return blackout;
    } catch (error) {
        console.log("Error in blackout query.")
        return error;
    }
};

// GET A SINGLE BLACKOUT DATE BY ID
const getBlackOutById = async (blackoutId, listingId) => {
  try {
    const singleBlackoutDate = await db.oneOrNone("SELECT * FROM blackoutDates WHERE id = $1 AND listing_id = $2", [blackoutId, listingId]);
    return singleBlackoutDate;
  } catch (error) {
    console.error("Error in getBlackOutById query:", error.message || error);
    throw error;
  }
};

//ADD BLACKOUT DATES
const createBlackoutDate = async (blackoutDate) => {
    try {
      const newBlackoutDate = await db.one(
        "INSERT INTO blackoutDates (listing_id, start_date, end_date) VALUES($1, $2, $3) RETURNING *",
        [blackoutDate.listing_id, blackoutDate.start_date, blackoutDate.end_date]
      );
      return newBlackoutDate;
    } catch (error) {
      return error;
    }
  };

//DELETE
const deleteBlackout = async (id) => {
  try {
    const deletedListing = await db.one(
      "DELETE FROM blackoutDates WHERE id = $1 RETURNING *",
      id
    );
    return deletedListing;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateBlackoutDate = async (id, blackoutDate) => {
    try {
      const updatedBlackoutDate = await db.one(
        "UPDATE blackoutDates SET listing_id=$1, start_date=$2, end_date=$3 WHERE id=$4 RETURNING *",
        [blackoutDate.listing_id, blackoutDate.start_date, blackoutDate.end_date, id]
      );
      return updatedBlackoutDate;
    } catch (error) {
      console.error("Error in updateBlackoutDate query:", error.message || error);
      throw error;
    }
  };

module.exports = {
    getBlackOut,
    createBlackoutDate,
    deleteBlackout,
    updateBlackoutDate,
    getBlackOutById
  };

  