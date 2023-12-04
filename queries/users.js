const { hash } = require("bcryptjs");
const db = require("../db/dbConfig.js");
const {sign} = require('jsonwebtoken');
const { SECRET, CLIENT_URL } = require("../constants/index.js");

//REGISTER
const register = async (req, res) =>{
  const {firstName, lastName, email, password} = req.body

  try{
    const hashedPassword = await hash(password,10)
    await db.query('INSERT INTO users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4)', [firstName, lastName, email, hashedPassword])
    
    return res.status(201).json({
      succcess: true,
      message: "Regristation Sucess!"
    })  
  }catch(error){
    console.log(error.message)
    return res.status(500).json({
      error: error.message
    })
  }
}

//LOGIN
const login = async(req,res) =>{
  let user = req.user
  let payload = {
    id: user.user_id,
  }
  
  try{
    const token = await sign(payload, SECRET)
    return res.status(200).cookie('token',token,{
      httpOnly: true, 
      domain: '.onrender.com',
      sameSite: 'None', 
      secure: true,  })
      .json({
      succcess: true,
      message: "Logged in Successfully!",
    })
  }catch(error){
    return res.status(500).json({
      error:error.message
    })
  }
}

//VIEW PRIVATE INFO
const protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: "protected",
      user: req.user
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

//LOGOUT
const logout = async (req, res) => {
  try{
    return res.status(200).clearCookie('token', {httpOnly: true}).json({
      success:true,
      message:"Logged out!"
    })
  }catch(error){
    console.log(error.message)
    return res.status(500).json({
      error: error.message
    })
  }
}

//ALL USERS
const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT user_id, firstName, lastName, email, phone, isVerified, created_at, role, image FROM users");
    return allUsers;
  } catch (error) {
    return error;
  }
};


// ONE USER
const getUser = async (id) => {
  try {
    const oneUser = await db.one("SELECT user_id, firstName, lastName, email, phone, isVerified, created_at, role FROM users WHERE user_id=$1", id);
    return oneUser;
  } catch (error) {
    return error;
  }
};

//CREATE NEW USER
const createUser = async (user) => {
  try {
    const newUser = await db.one(
      "INSERT INTO users (firstName, lastName, address, enail, phone, verified, password, created_at, role) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [user.firstName, user.lastName, user.address, user.email, user.phone, user.verified, user.password, user.created_at]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};


//DELETE
const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE user_id = $1 RETURNING *",
      id
    );
    return deletedUser;
  } catch (error) {
    return error;
  }
};
  
//UPDATE
const updateUser = async (id, user) => {
  try {
    const updatedUser = await db.one(
      "UPDATE users SET firstName=$1, lastName=$2, address=$3, email=$4, phone=$5, verified=$6, password=$7, created_at=$8, role=$9  where user_id=$10 RETURNING *",
      [user.firstName, user.lastName, user.address, user.email, user.phone, user.verified, user.password, user.created_at, id]
    );
    return updatedUser;
  }catch(error) {
    return error;
  }
};
  
//COLLECT
const collectListings = async (userId) =>{
  try{
    const listings = await db.any("SELECT * FROM listing WHERE host = $1", userId);
    return listings
  }catch(error){
    return error
  }
}
module.exports = {
  getAllUsers,
  register,
  login,
  protected,
  logout,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  collectListings
};
