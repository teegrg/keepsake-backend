const db = require("../db/dbConfig.js");

//ALL Bookmarks
const getAllListings = async () => {
    try {
      const allListings = await db.any("SELECT * FROM keepsake");
      return allListings;
    } catch (error) {
      return error;
    }
  };

  // ONE Bookmark
  const getListing = async (id) => {
    try {
      const oneListing = await db.one("SELECT * FROM bookmarks WHERE id=$1", id);
      return oneListing;
    } catch (error) {
      return error;
    }
  };

  //CREATE new Bookmark
const createBookmark = async (bookmark) => {
  try {
    const newBookmark = await db.one(
      "INSERT INTO bookmarks (name, url, category, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
      [bookmark.name, bookmark.url, bookmark.category, bookmark.is_favorite]
    );
    return newBookmark;
  } catch (error) {
    return error;
  }
};

//DELETE
const deleteBookmark = async (id) => {
  try {
    const deletedBookmark = await db.one(
      "DELETE FROM bookmarks WHERE id = $1 RETURNING *",
      id
    );
    return deletedBookmark;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateBookmark = async (id, bookmark) => {
  try {
    const updatedBookmark = await db.one(
      "UPDATE bookmarks SET name=$1, url=$2, category=$3, is_favorite=$4 where id=$5 RETURNING *",
      [bookmark.name, bookmark.url, bookmark.category, bookmark.is_favorite, id]
    );
    return updatedBookmark;
  }catch(error) {
    return error;
  }
};

module.exports = {
  getAllBookmarks,
  getBookmark,
  createBookmark,
  deleteBookmark,
  updateBookmark,
};
