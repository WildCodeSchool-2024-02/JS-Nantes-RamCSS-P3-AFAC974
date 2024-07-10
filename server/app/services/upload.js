const path = require("path");

const ido = 500;

const fs = require("fs").promises;

const createFolderPath = path.join(
  __dirname,
  `../../../../../client/public/images/photos/photographer${ido}`
);
const createSubfolderPath = path.join(
  __dirname,
  `../../../../../client/public/images/photos/photographer${ido}/thumbnails`
);

const createFolder = async (req, res, next) => {
  // const { photographer } = req.body;
  // const { id } = req.body;
  // console.log("req.body => ", id);

  // try {
  // Insert the item into the database
  /* const createFolder1 = */ fs.mkdir(`${createFolderPath}`);
  /* const createSubfolder = */ fs.mkdir(`${createSubfolderPath}`);

  //   // Respond with HTTP 201 (Created) and the ID of the newly inserted item
  //   res.status(201).json({ createFolder1, createSubfolder });
  // } catch (err) {
  //   // Pass any errors to the error-handling middleware
  next();
  // }
};

const uploadsFolderPath = path.join(
  __dirname,
  `../../../../../client/public/images/photos/photographer${ido}`,
  `../../../../../client/public/images/photos/photographer${ido}/thumbnails`
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

module.exports = { createFolder, upload };
