const express = require("express");
const user_review = express.Router();
// const { checkName, checkType, checkBoolean } = require("../validations/checkPlanets");
const {
  getAllReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview
} = require("../queries/user_reviews");

// INDEX
user_review.get("/", async (req, res) => {
  const allReviews = await getAllReviews();
  if (allReviews[0]) {
    res.status(200).json(allReviews);
  }
  else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
user_review.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await getReview(id);
  if (review) {
    res.json(review);
  }
  else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
user_review.post("/", async (req, res) => {
  try {
    const review = await createReview(req.body);
    res.json(review);
  }
  catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
user_review.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedReview = await deleteReview(id);
  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  }
  else {
    res.status(404).json("Song not found!");
  }
});

// UPDATE
user_review.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedReview = await updateReview(id, req.body);
  res.status(200).json(updatedReview);
});

module.exports = user_review;