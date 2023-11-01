const db = require("../db/dbConfig.js");

//ALL Bookmarks
const getAllUsers = async () => {
    try {
      const allUsers = await db.any("SELECT * FROM users");
      return allUsers;
    } catch (error) {
      return error;
    }
  };


  // ONE Bookmark
const getUser = async (id) => {
    try {
      const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
      return oneUser;
    } catch (error) {
      return error;
    }
  };

    //CREATE new Bookmark
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
        "DELETE FROM users WHERE id = $1 RETURNING *",
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
        "UPDATE users SET firstName=$1, lastName=$2, address=$3, email=$4, phone=$5, verified=$6, password=$7, created_at=$8, role=$9  where id=$10 RETURNING *",
        [user.firstName, user.lastName, user.address, user.email, user.phone, user.verified, user.password, user.created_at, id]
      );
      return updatedUser;
    }catch(error) {
      return error;
    }
  };
  
  module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
  };  