const express = require("express");

const router = express.Router();

/* const {createFolder,upload}=require("../../../services/upload"); */

const path = require("path");

const fs = require("fs").promises;

const photographerid = 59;
// Définir les chemins des dossiers à créer
// const createFolderPath = path.join(
//   __dirname,
//   `../../../../../client/public/images/photos/photographer${ido}`
// );
// const createSubfolderPath = path.join(
//   __dirname,
//   `../../../../../client/public/images/photos/photographer${ido}/thumbnails`
// );

const createFolder = async (req, res, next) => {
  // const { photographerid } = req.body;

  const createFolderPath = path.join(
    __dirname,
    `../../../../../client/public/images/photos/photographer${photographerid}`
  );
  const createSubfolderPath = path.join(
    __dirname,
    `../../../../../client/public/images/photos/photographer${photographerid}/thumbnails`
  );

  try {
    // Vérifier si le sous-dossier existe
    await fs.access(createSubfolderPath);
    res.status(400);
    console.warn("Le dossier existe déjà");
  } catch (error) {
    // Si le sous-dossier n'existe pas, le créer ainsi que le dossier parent
    try {
      await fs.mkdir(createFolderPath, { recursive: true });
      await fs.mkdir(createSubfolderPath);
      res.status(200);
      console.warn("On a créé le dossier");
      next();
    } catch (mkdirError) {
      res.status(400);
      console.warn("Erreur inconnue", mkdirError);
      next(mkdirError);
    }
  }
};

const uploadsFolderPath = path.join(
  __dirname,
  `../../../../../client/public/images/photos/photographer${photographerid}`,
  `../../../../../client/public/images/photos/photographer${photographerid}/thumbnails`
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

router.post("/", createFolder, upload.single("file"), (req, res) => {
  try {
    if (!req.body.file) {
      return res.status(400).json({ error: "Please send file" });
    }

    const { filename } = req.body.file;
    const { id } = req.body;

    return res.json({ message: "File uploaded !", filename, id });
  } catch (err) {
    console.error(err);
    return null;
  }
});

module.exports = router;
