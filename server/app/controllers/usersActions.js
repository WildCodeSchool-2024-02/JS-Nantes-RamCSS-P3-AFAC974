// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await tables.user.readAll();

    // Respond with the users in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.user.read(req.params.id);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readToken = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.user.read(req.params.id);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  
  // Extract the item data from the request body
  const { id } = req.params;
  const user = req.body;
  user.password='';

  Object.entries(user).forEach(([key]) => {
    if (user[key] === "") {
      delete user[key];
    }
  });
  
  const keys = Object.keys(user);
  keys.map((value, index) => {
    if (value === "hashedPassword") {
      keys[index] = "hashed_password"; // Modification directe
      
    }return keys[index]
  });
  const values = Object.values(user);
  
   
  try {
    if(keys.length===0){res.status(301).json({ response:"error" });}else{
    // Insert the item into the database
    const editId = await tables.user.update(id, keys, values);
    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ editId });
  }} catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
}

// The A of BREAD - Add (Create) operation
const addFavorite = async (req, res, next) => {
  // Extract the user data from the request body
  const favorite = req.body;
  // const regex = /^[a-z][a-z1-9\-_.]{4,50}@[a-z1-9\-_]{5,50}\.[a-z]{2,4}$/;

  try {
    // if (!regex.test(user.email)) {
     // res.status(400).json("vous avez entré des carractères invalides");
    // } else {
      // Insert the user into the database
      const insertId = await tables.favorite.createFavorite(favorite);

      // Respond with HTTP 201 (Created) and the ID of the newly inserted user
      res.status(201).json({ insertId });
    // }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  const user = req.body;
  

  try {
      const insertId = await tables.user.create(user);

      // Respond with HTTP 201 (Created) and the ID of the newly inserted user
      res.status(201).json({ insertId });
    // }
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
    const deleteId = await tables.user.delete(id);
if(deleteId.affectedRows===0) {
  res.status(301).json({ response:"can't delete" });
}else{
    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ deleteId });
  }} catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  readToken,
  edit,
  add,
  addFavorite,
  destroy,
};
