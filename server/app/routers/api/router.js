const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const artworksRouter = require("./artworks/router");

router.use("/artworks", artworksRouter);

const artistsRouter = require("./artists/router");

router.use("/artists", artistsRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const uploadRouter = require("./uploads/router");

router.use("/upload", uploadRouter);

/* ************************************************************************* */

module.exports = router;
