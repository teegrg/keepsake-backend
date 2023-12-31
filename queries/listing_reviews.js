const db = require("../db/dbConfig.js");

//ALL LISTING REVIEWS
const getAllListingReviews = async () => {
    try {
      const allReviews = await db.any("SELECT * FROM listing_reviews")
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

    //CREATE NEW LISTING REVIEW
const createListingReview = async (review) => {
  try {
    const newListingReview = await db.one(
      "INSERT INTO listing_reviews (author_id, listing_id, title, body, rating) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [review.author_id, review.listing_id, review.title, review.body, review.rating]
    );
    return newListingReview;
  } catch (error) {
    return error;
  }
};

//DELETE
const deleteListingReview = async (id) => {
  try {
    const deletedListingReview = await db.one(
      "DELETE FROM listing_reviews WHERE id = $1 RETURNING *",
      id
    );
    return deletedListingReview;
  } catch (error) {
    return error;
  }
};


//UPDATE
const updateListingReview = async (id, review) => {
  try {
    const updatedReview = await db.one(
      "UPDATE listing_reviews SET author_id=$1, listing_id=$2, title=$3, body=$4, rating=$5  where listing_id=$6 RETURNING *",
      [review.author_id, review.listing_id, review.title, review.body, review.rating, id]
    );
    return updatedReview;
  }catch(error) {
    return error;
  }
};


module.exports = {
  getAllListingReviews,
  getListingReview,
  createListingReview,
  deleteListingReview,
  updateListingReview,
};
