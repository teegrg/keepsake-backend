const db = require("../db/dbConfig.js");

//SHOW ALL 
const getAllBlackoutDates = async () => {
  try {
    const blackoutDates = await db.any('SELECT * FROM blackoutDates');
    return blackoutDates;
  } catch (error) {
    throw new Error(`Error retrieving blackout dates: ${error.message}`);
  }
};

//SHOW USING BLACKOUT ID
const getBlackoutDateById = async (blackoutId) => {
  try {
    const blackoutDate = await db.oneOrNone('SELECT * FROM blackoutDates WHERE id = $1', blackoutId);
    return blackoutDate;
  } catch (error) {
    throw new Error(`Error retrieving blackout date: ${error}`);
  }
};


// CREATE - Add blackout dates
const createBlackoutDate = async (blackoutDate) => {
  try {
    const { listing_id,start_date, end_date } = blackoutDate;

    const newBlackoutDate = await db.one(
      "INSERT INTO blackoutDates (listing_id, start_date, end_date) VALUES($1, $2, $3) RETURNING *",
      [listing_id,start_date, end_date]
    );
    
    return newBlackoutDate;
  } catch (error) {
    console.error("Error in createBlackoutDate query:", error.message || error);
    throw error;
  }
};


// DELETE - Remove blackout date by ID
const deleteBlackout = async (blackoutId) => {
  try {
    const deletedBlackout = await db.one(
      "DELETE FROM blackoutDates WHERE id = $1 RETURNING *",
      blackoutId
    );
    return deletedBlackout;
  } catch (error) {
    console.error("Error in deleteBlackout query:", error.message || error);
    throw error;
  }
};

// UPDATE - Modify blackout date by ID
const updateBlackoutDate = async (blackoutId, blackoutDate) => {
  try {
    const updatedBlackoutDate = await db.one(
      "UPDATE blackoutDates SET start_date=$1, end_date=$2 WHERE id=$3 RETURNING *",
      [blackoutDate.start_date, blackoutDate.end_date, blackoutId]
    );
    return updatedBlackoutDate;
  } catch (error) {
    console.error("Error in updateBlackoutDate query:", error.message || error);
    throw error;
  }
};


//GET DATES FOR SPECIFIC LISTING USING LISTING ID
const getBlackOutByListingId = async (id) => {
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



module.exports = {
    getBlackoutDateById,
    getAllBlackoutDates,
    getBlackOutByListingId,
    createBlackoutDate,
    deleteBlackout,
    updateBlackoutDate,
    getBlackOutById
  };

  