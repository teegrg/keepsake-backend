const { hash } = require("bcryptjs");
const db = require("../db/dbConfig.js");
const {sign} = require('jsonwebtoken');
const { SECRET, SERVER_URL } = require("../constants/index.js");
const url = require('url');


const parsedUrl = url.parse(SERVER_URL);
const hostname = parsedUrl.hostname;

//REGISTER
const register = async (req, res) =>{
  const {first_name, last_name, email, password} = req.body

  try{
    const hashedPassword = await hash(password,10)
    await db.query('INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)', [first_name, last_name, email, hashedPassword])
    
    return res.status(201).json({
      succcess: true,
      message: "Regristation Sucess!"
    })  
  }
  catch(error) {
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
      domain: hostname,
      sameSite: 'None', 
      secure: true,  
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)})
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
    return res.status(500).json({
      error: error.message
    })
  }
}

//ALL USERS
const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT user_id, first_name, last_name, email, phone, is_verified, created_at, role, image FROM users");
    return allUsers;
  } catch (error) {
    return error;
  }
};


// ONE USER
const getUser = async (id) => {
  try {
    const oneUser = await db.one("SELECT user_id, first_name, last_name, address, email, phone, is_verified, created_at, role, image FROM users WHERE user_id=$1", id);
    return oneUser;
  } catch (error) {
    return error;
  }
};

//CREATE NEW USER
const createUser = async (user) => {
  try {
    const newUser = await db.one(
      "INSERT INTO users (first_name, last_name, address, enail, phone, verified, password, created_at, role) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [user.first_name, user.last_name, user.address, user.email, user.phone, user.verified, user.password, user.created_at]
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
      "UPDATE users SET first_name=$1, last_name=$2, address=$3, email=$4, phone=$5 where user_id=$6 RETURNING *",
      [user.first_name, user.last_name, user.address, user.email, user.phone, id]
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
    return listings;
  }
  catch(error) {
    return error;
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
