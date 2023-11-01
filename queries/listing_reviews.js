const db = require("../db/dbConfig.js");

//ALL LISTING REVIEWS
const getAllListingReviews = async () => {
    try {
      const allReviews = await db.any("SELECT * FROM listing_reviews");
      return allReviews;
    } catch (error) {
      return error;
    }
  };


  // ONE LISTING_REVIEWS
  const getListingReview = async (id) => {
    try {
      const oneReview = await db.one("SELECT * FROM listing_reviews WHERE id=$1", id);
      return oneReview;
    } catch (error) {
      return error;
    }
  };