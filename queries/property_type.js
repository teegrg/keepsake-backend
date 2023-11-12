const db = require("../db/dbConfig.js");

//ALL PROPERTY_TYPE
const getAllPropertyType = async () => {
    try {
      const allPropertyType = await db.any("SELECT * FROM property_type_lookup");
      return allPropertyType;
    } catch (error) {
      return error;
    }
  };