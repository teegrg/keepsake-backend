const db = require("../db/dbConfig.js");

//ALL Bookmarks
const getAllReviews = async () => {
    try {
      const allReviews = await db.any("SELECT * FROM listing");
      return allReviews;
    } catch (error) {
      return error;
    }
  };

  // ONE Bookmark
  const getReview = async (id) => {
    try {
      const oneReview = await db.one("SELECT * FROM listing WHERE id=$1", id);
      return oneReview;
    } catch (error) {
      return error;
    }
  };

  //CREATE new Bookmark
const createReview = async (review) => {
  try {
    const newReview = await db.one(
      "INSERT INTO review (author_id, review_id, title, body, rating) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [review.address, review.size, review.price, review.posted_at, review.type, review.host, review.renter, review.isRented, review.avg_rating]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

//DELETE
const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM listing WHERE id = $1 RETURNING *",
      id
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateReview = async (id, review) => {
  try {
    const updatedReview = await db.one(
      "UPDATE review SET author_id=$1, reviewed_id=$2, title=$3, body=$4, rating=$5  where id=$6 RETURNING *",
      [review.author_id, review.reviewed_id, review.title, review.body, review.rating, id]
    );
    return updatedReview;
  }catch(error) {
    return error;
  }
};

module.exports = {
  getAllReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview,
};
