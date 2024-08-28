const express = require("express");

const router = express.Router();

const path = require("path");

const uploadsFolderPath = path.join(
  __dirname,
  `../../../../../client/public/images/photos/`
);

const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadsFolderPath);
  },
  filename(req, file, cb) {
    cb(
      null,
      `${path.parse(file.originalname).name}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Invalid mime type"));
    }
    return null;
  },
});

router.post("/artist", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Please send file" });
    }

    const { filename } = req.file;
    const { id } = req.body;
    return res.json({ message: "File uploaded !", filename, id });
  } catch (err) {
    console.error(err);
    return null;
  }
});

router.post("/artwork", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Please send file" });
    }

    const { filename } = req.file;
    const { id } = req.body;
    return res.json({ message: "File uploaded !", filename, id });
  } catch (err) {
    console.error(err);
    return null;
  }
});

module.exports = router;
