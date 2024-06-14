const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const photosRouter = require("./photos/router");

router.use("/photos", photosRouter);

const artistsRouter = require("./artists/router");

router.use("/artists", artistsRouter);

/* ************************************************************************* */

module.exports = router;
