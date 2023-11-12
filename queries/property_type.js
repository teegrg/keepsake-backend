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



// ONE PROPERTY_TYPE
const getOnePropertyType = async (id) => {
try {
    const OnePropertyType = await db.one("SELECT * FROM property_type_lookup WHERE id=$1", id);
    return OnePropertyType;
} catch (error) {
    return error;
}
};


//CREATE NEW 
const createPropertyType = async (propertyType) => {
    try {
        const newPropertType = await db.one(
        "INSERT INTO property_type_lookup (property_type) VALUES($1) RETURNING *",
        [propertyType.property_type]
        );
        return newPropertType;
    } catch (error) {
        return error;
    }
};