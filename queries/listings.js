const db = require("../db/dbConfig.js");

//ALL LISTINGS
const getAllListings = async () => {
    try {
      const allListings = await db.any("SELECT * FROM listing");
      return allListings;
    }
    catch (error) {
      return error;
    }
  };

  // ONE LISTING
  const getListing = async (id) => {
    try {
      const oneListing = await db.one("SELECT * FROM listing WHERE listing_id=$1", id);
      return oneListing;
    } catch (error) {
      return error;
    }
  };

  //CREATE NEW LISTING
const createListing = async (listing) => {
  try {
    const newListing = await db.one(
      "INSERT INTO listing (street, apt, city, state, zip, size, price, posted_at, type, host, isRented, avg_rating, description) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
      [listing.street, listing.apt, listing.city, listing.state, listing.zip, listing.size, listing.price, listing.posted_at, listing.type, listing.host, listing.isRented, listing.avg_rating, listing.description]
    );
    return newListing;
  } catch (error) {
    return error;
  }
};

//DELETE
const deleteListing = async (id) => {
  try {
    const deletedListing = await db.one("DELETE FROM listing WHERE id = $1 RETURNING *", id);
    return deletedListing;
  }
  catch (error) {
    return error;
  }
};

//UPDATE
const updateListing = async (id, listing) => {
  try {
    const updateListing = await db.one(
      "UPDATE listing SET street=$1, apt=$2, city=$3, state=$4, zip=$5, size=$6, price=$7, posted_at=$8, type=$9, host=$10, renter=$11, isRented=$12, avg_rating=$13  where id=$14 RETURNING *",
      [listing.street, listing.apt, listing.city, listing.state, listing.zip, listing.size, listing.price, listing.posted_at, listing.type, listing.host, listing.renter, listing.isRented, listing.avg_rating, id]
    );
    return updateListing;
  }
  catch (error) {
    return error;
  }
};

module.exports = {
  getAllListings,
  getListing,
  createListing,
  deleteListing,
  updateListing,
};
