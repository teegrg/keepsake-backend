const db = require("../db/dbConfig.js");

//ALL Bookmarks
const getAllReviews = async () => {
    try {
      const allReviews = await db.any("SELECT * FROM listing_reviews");
      return allReviews;
    } catch (error) {
      return error;
    }
  };