const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import photo-related actions
const {
  browse,
  randBrowse,
  homeBrowse,
  read,
  add,
  destroy,
  edit,
} = require("../../../controllers/artworksActions");

// Route to get a list of artworks
router.get("/", browse);

// Route to get a list of artworks
router.get("/rand", randBrowse);

// Route to get a list of artworks
router.get("/home", homeBrowse);

// Route to get a specific artwork by ID
router.get("/:id", read);

// Route to add a new artwork
router.post("/", add);

// Route to delete artwork
router.delete("/delete/:id", destroy);

// Route to update artwork
router.put("/update/:id", edit);

/* ************************************************************************* */

module.exports = router;
