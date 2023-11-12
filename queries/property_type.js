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

//DELETE
const deletePropertyType = async (id) => {
    try {
      const deletedPropertyType = await db.one(
        "DELETE FROM property_type_lookup WHERE id = $1 RETURNING *",
        id
      );
      return deletedPropertyType;
    } catch (error) {
      return error;
    }
};


//UPDATE
const updatePropertyType = async (id, PropertyType) => {
    try {
      const updatedPropertyType = await db.one(
        "UPDATE property_type_lookup SET property_type=$1  where id=$2 RETURNING *",
        [PropertyType.property_type, id]
      );
      return updatedPropertyType;
    }catch(error) {
      return error;
    }
  };
  
  module.exports = {
    getAllPropertyType,
    getOnePropertyType,
    createPropertyType,
    deletePropertyType,
    updatePropertyType,
  };