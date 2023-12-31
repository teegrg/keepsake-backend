const db = require("../db/dbConfig.js");

//ALL AVAILABILITY
const getAllAvailability = async () => {
    try {
      const allAvailability = await db.any("SELECT * FROM availability");
      return allAvailability;
    } catch (error) {
      return error;
    }
};


// ONE AVAILABILITY
const getAvailability = async (id) => {
    try {
        const oneAvailability = await db.one("SELECT * FROM availability WHERE listing_id=$1", id);
        return oneAvailability;
    } catch (error) {
        return error;
    }
};


//CREATE NEW AVAILABILITY
const createAvailability = async (availability) => {
    try {
        const newAvailability = await db.one(
        "INSERT INTO availability (listing_id, days_not_available, min_days, max_days) VALUES($1, $2, $3, $4) RETURNING *",
        [availability.listing_id, availability.days_not_available, availability.min_days, availability.max_days]
        );
        return newAvailability;
    } catch (error) {
        return error;
    }
};


//DELETE
const deleteAvailability = async (id) => {
    try {
      const deletedAvailability = await db.one(
        "DELETE FROM availability WHERE id = $1 RETURNING *",
        id
      );
      return deletedAvailability;
    } catch (error) {
      return error;
    }
};
  

//UPDATE
const updateAvailability = async (id, availability) => {
    try {
      const updatedAvailability = await db.one(
        "UPDATE availability SET listing_id=$1, days_not_available=$2, min_days=$3, max_days=$4  where id=$5 RETURNING *",
        [availability.listing_id, availability.days_not_available, availability.min_days, availability.max_days,id]
      );
      return updatedAvailability;
    }catch(error) {
      return error;
    }
  };
  
  module.exports = {
    getAllAvailability,
    getAvailability,
    createAvailability,
    deleteAvailability,
    updateAvailability,
  };