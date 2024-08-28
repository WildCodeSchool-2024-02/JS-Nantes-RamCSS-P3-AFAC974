const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import photo-related actions
const {
  browse,
  homeBrowse,
  read,
  readId,
  add,
  destroy,
  edit,
} = require("../../../controllers/artistsAction");

// Route to get a list of artists
router.get("/", browse);

// Route to get a list of artists
router.get("/home", homeBrowse);

// Route to get a list of artists
router.get("/artistid", readId);

// Route to get a specific artist by ID
router.get("/:id", read);

// Route to add a new artist
router.post("/", add);

// Route to delete an artist
router.delete("/delete/:id", destroy);

// Route to update an artist
router.put("/update/:id", edit);
/* ************************************************************************* */

module.exports = router;
