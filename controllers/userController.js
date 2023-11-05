const express = require("express");
const users = express.Router();
const {
  checkFirstName,
  checkLastName,
  checkAddress,
  checkEmail,
  checkPhone,
  checkPassword,
  checkBoolean
} = require("../validations/checkUsers");

const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser
} = require("../queries/users");

// INDEX
users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.status(200).json(allUsers);
  }
  else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user) {
    res.json(user);
  }
  else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
users.post("/", checkFirstName, checkLastName, checkAddress, checkEmail, checkPhone, checkPassword, checkBoolean, async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.json(user);
  }
  catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  if (deletedUser.id) {
    res.status(200).json(deletedUser);
  }
  else {
    res.status(404).json("Song not found!");
  }
});

// UPDATE
users.put("/:id", checkFirstName, checkLastName, checkAddress, checkEmail, checkPhone, checkPassword, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedUser = await updateUser(id, req.body);
  res.status(200).json(updatedUser);
});

module.exports = users;
