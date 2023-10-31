const express = require("express");
const items = express.Router();
// const { checkName, checkType, checkBoolean } = require("../validations/checkPlanets");
const {
  getAllItems,
  getOneItem,
  createItem,
  deleteItem,
  updateItem
} = require("../queries/reviews");

// INDEX
items.get("/", async (req, res) => {
  const allItems = await getAllItems();
  if (allItems[0]) {
    res.status(200).json(allItems);
  }
  else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
items.get("/:id", async (req, res) => {
  const { id } = req.params;
  const item = await getOneItem(id);
  if (item) {
    res.json(item);
  }
  else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
items.post("/", async (req, res) => {
  try {
    const item = await createItem(req.body);
    res.json(item);
  }
  catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
items.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedItem = await deleteItem(id);
  if (deletedItem.id) {
    res.status(200).json(deletedItem);
  }
  else {
    res.status(404).json("Song not found!");
  }
});

// UPDATE
items.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedItem = await updateItem(id, req.body);
  res.status(200).json(updatedItem);
});

module.exports = items;