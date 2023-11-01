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