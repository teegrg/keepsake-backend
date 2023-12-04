const db = require("../db/dbConfig.js");

//search
const getSearchByAsc = async (searchZip) => {
  try {
    // Listings with the searched ZIP code
    const listingsWithSearchedZip = await db.any("SELECT * FROM listing WHERE zip = $1", searchZip);

    let listingsWithOtherZipsAsc = [];
    let listingsWithOtherZipsDesc = [];

    // If searched ZIP code is found, fetch next five rows in ascending order
    if (listingsWithSearchedZip.length > 0) {
      listingsWithOtherZipsAsc = await db.any(
        "SELECT * FROM listing WHERE zip <> $1 ORDER BY ABS(zip::integer - $1::integer), zip ASC LIMIT 5",
        searchZip
      );

      // Fetch next five rows in descending order
      listingsWithOtherZipsDesc = await db.any(
        "SELECT * FROM listing WHERE zip <> $1 ORDER BY ABS(zip::integer - $1::integer) DESC, zip DESC LIMIT 5",
        searchZip
      );
    } else {
      // If searched ZIP code is not found, fetch 10 rows that are close to the searched ZIP code
      const closeListings = await db.any(
        "SELECT * FROM listing ORDER BY ABS(zip::integer - $1::integer), zip ASC LIMIT 10",
        searchZip
      );

      return closeListings;
    }

    // Combine the results
    const allListings = listingsWithSearchedZip.concat(listingsWithOtherZipsAsc, listingsWithOtherZipsDesc);

    return allListings;
  } catch (error) {
    return error;
  }
};



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
  getSearchByAsc
};
