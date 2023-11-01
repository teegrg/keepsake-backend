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
    const oneAvailability = await db.one("SELECT * FROM availability WHERE id=$1", id);
    return oneAvailability;
} catch (error) {
    return error;
}
};