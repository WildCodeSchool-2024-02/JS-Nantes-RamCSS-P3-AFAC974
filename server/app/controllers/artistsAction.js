// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const photos = await tables.artist.readAll();

    // Respond with the items in JSON format
    res.json(photos);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const homeBrowse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const photos = await tables.artist.readfourResult();

    // Respond with the items in JSON format
    res.json(photos);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const readId = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const photo = await tables.artist.readId(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (photo == null) {
      res.sendStatus(404);
    } else {
      res.json(photo);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const photo = await tables.artist.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (photo == null) {
      res.sendStatus(404);
    } else {
      res.json(photo);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the item data from the request body
  const { id } = req.params;
  const artist = req.body;

  Object.entries(artist).forEach(([key]) => {
    if (artist[key] === "") {
      delete artist[key];
    }
  });

  const keys = Object.keys(artist);
  const values = Object.values(artist);

  try {
    // Insert the item into the database
    const editId = await tables.artist.update(id, keys, values);
    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ editId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const artist = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.artist.create(artist);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  // Extract the item data from the request body

  try {
    const { id } = req.params;

    // Insert the item into the database
    const deleteId = await tables.artist.delete(id);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ deleteId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  homeBrowse,
  read,
  readId,
  edit,
  add,
  destroy,
};
