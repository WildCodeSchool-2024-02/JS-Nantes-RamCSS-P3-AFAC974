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
  add,
  destroy,
} = require("../../../controllers/artistsAction");

// Route to get a list of items
router.get("/", browse);

// Route to get a list of items
router.get("/home", homeBrowse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

// Route to add a new item
router.delete("/delete/:id", destroy);
/* ************************************************************************* */

module.exports = router;
