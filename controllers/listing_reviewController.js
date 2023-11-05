const express = require("express");
const listing_review = express.Router({mergeParams: true});
// const { checkName, checkType, checkBoolean } = require("../validations/checkPlanets");
const {
    getAllListingReviews,
    getListingReview,
    createListingReview,
    deleteListingReview,
    updateListingReview,
} = require("../queries/listing_reviews");

// INDEX
listing_review.get("/", async (req, res) => {
  const { listingId } = req.params;
  
  const allReviews = await getAllListingReviews(listingId);
  if (allReviews[0]) {
    res.status(200).json(allReviews);
  }
  else {
    res.status(500).json({ error: "server error" });
  }
});

// // SHOW
// listing_review.get("/", async (req, res) => {
//   const { id } = req.params;
//   const review = await getListingReview(id);
//   if (review) {
//     res.json(review);
//   }
//   else {
//     res.status(404).json({ error: "not found" });
//   }
// });

// CREATE
listing_review.post("/", async (req, res) => {
  try {
    const review = await createListingReview(req.body);
    res.json(review);
  }
  catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
listing_review.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedReview = await deleteListingReview(id);
  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  }
  else {
    res.status(404).json("Song not found!");
  }
});

// UPDATE
listing_review.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedReview = await updateListingReview(id, req.body);
  res.status(200).json(updatedReview);
});

module.exports = listing_review;