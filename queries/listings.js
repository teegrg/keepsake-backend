const db = require("../db/dbConfig.js");

//ALL Bookmarks
const getAllListings = async () => {
    try {
      const allListings = await db.any("SELECT * FROM listing");
      return allListings;
    } catch (error) {
      return error;
    }
  };

  // ONE Bookmark
  const getListing = async (id) => {
    try {
      const oneListing = await db.one("SELECT * FROM listing WHERE id=$1", id);
      return oneListing;
    } catch (error) {
      return error;
    }
  };

  //CREATE new Bookmark
const createListing = async (listing) => {
  try {
    const newListing = await db.one(
      "INSERT INTO listing (address, size, price, posted_at, type, host, renter, isRented, avg_rating) VALUES($1, $2, $3, $4) RETURNING *",
      [listing.address, listing.size, listing.price, listing.posted_at, listing.type, listing.host, listing.renter, listing.isRented, listing.avg_rating]
    );
    return newListing;
  } catch (error) {
    return error;
  }
};

//DELETE
const deleteListing = async (id) => {
  try {
    const deletedListing = await db.one(
      "DELETE FROM listing WHERE id = $1 RETURNING *",
      id
    );
    return deletedListing;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateListing = async (id, listing) => {
  try {
    const updateListing = await db.one(
      "UPDATE listing SET address=$1, size=$2, price=$3, posted_at=$4, type=$5, host=$6, renter=$7, isRented=$8, avg_rating=$9  where id=$10 RETURNING *",
      [listing.address, listing.size, listing.price, listing.posted_at, listing.type, listing.host, listing.renter, listing.isRented, listing.avg_rating, id]
    );
    return updateListing;
  }catch(error) {
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
