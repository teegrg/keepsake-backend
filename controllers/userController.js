const express = require("express");
const users = express.Router();

const {validationMiddleware} = require('../middlewares/validations-middle')
const {userAuth} = require('../middlewares/password-middle')

const {
  checkFirstName,
  checkLastName,
  checkAddress,
  checkPhone,
  checkBoolean,
  registerValidation,
  loginValidation
} = require("../validations/checkUsers");

const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  collectListings,
  register,
  login,
  protected,
  logout
} = require("../queries/users");

const { getUserBookings } = require("../queries/booked")


// Reviews ROUTES
const user_reviewController = require("./user_reviewController");
users.use("/:userId/reviews", user_reviewController);

users.post('/register', registerValidation, validationMiddleware, register)
users.post('/login', loginValidation, validationMiddleware, login )
users.get('/protected', userAuth, protected)
users.get('/logout', logout)


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

// // CREATE
// users.post("/", checkFirstName, checkLastName, checkAddress, checkEmail, checkPhone, checkPassword, checkBoolean, async (req, res) => {
//   try {
//     const user = await createUser(req.body);
//     res.json(user);
//   }
//   catch (error) {
//     res.status(400).json({ error: error });
//   }
// });

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

// // UPDATE
// users.put("/:id", checkFirstName, checkLastName, checkAddress, checkEmail, checkPhone, checkPassword, checkBoolean, async (req, res) => {
//   const { id } = req.params;
//   const updatedUser = await updateUser(id, req.body);
//   res.status(200).json(updatedUser);
// });

//COLLECT
users.get('/:id/listings', async (req, res) =>{
  const { id } = req.params;
  
  const all = await collectListings(id);
  if(all[0]){
    res.json(all)
  }else{
    res.status(404).json({error:"not found"})
  }
})


//GETS ALL BOOKING INFO
users.get("/:userId/bookings", async (req, res) => {
  try {
    const { userId } = req.params;
    const userBookings = await getUserBookings(userId);
    
    if (userBookings.length > 0) {
      res.status(200).json(userBookings);
    } else {
      res.status(404).json({ message: "No bookings found for this user" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings", details: error.message || error });
  }
});

module.exports = users;
