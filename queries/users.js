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
const getUsers = async (id) => {
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