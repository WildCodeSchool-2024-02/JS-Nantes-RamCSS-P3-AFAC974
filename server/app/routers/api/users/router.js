const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Import userActions module for handling user-related operations
const userActions = require("../../../controllers/usersActions");
const { hashPassword, verifyToken } = require("../../../services/auth");

// Import photo-related actions
// const { browse, read, add } = require("../../../controllers/usersActions");

router.get("/", userActions.browse);
router.get("/:id", userActions.read);
router.post("/", hashPassword, userActions.add);

// Import authActions module for handling auth-related operations
const authActions = require("../../../controllers/authActions");

router.post("/login", hashPassword, authActions.login);

router.post("/auth",verifyToken, authActions.readToken)
// Authentication wall
router.use(verifyToken);
/* ************************************************************************* */

module.exports = router;
