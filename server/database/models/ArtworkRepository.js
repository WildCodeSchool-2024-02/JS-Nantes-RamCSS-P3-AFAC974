const AbstractRepository = require("./AbstractRepository");

class ArtworkRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "artwork" });
  }

  // The C of CRUD - Create operation

  async create(artwork) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const photo = `images/photos/${artwork.filename}`;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title,description,image,id_artist,alt_artwork) values (?, ?, ?, ?, ?)`,
      [
        artwork.title,
        artwork.description,
        photo,
        artwork.id_artist,
        artwork.alt_artwork,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID

    const [rows] = await this.database.query(
      `SELECT artwork.id,artwork.title,artwork.description,artwork.image,artwork.alt_artwork,artwork.id_artist,artist.firstname,artist.lastname FROM ${this.table} JOIN artist ON artwork.id_artist = artist.id WHERE artwork.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `SELECT artwork.id,artwork.title,artwork.description,artwork.image, artwork.alt_artwork,artwork.id_artist,artist.firstname,artist.lastname,artist.photo,artist.alt_artist FROM artwork LEFT JOIN artist ON artwork.id_artist = artist.id ORDER BY artwork.id_artist ASC`
    );
    // Return the array of items
    return rows;
  }

  async readRandAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `SELECT artwork.id,artwork.title,artwork.description,artwork.image, artwork.alt_artwork,artwork.id_artist,artist.firstname,artist.lastname,artist.photo,artist.alt_artist FROM artwork LEFT JOIN artist ON artwork.id_artist = artist.id ORDER BY RAND()`
    );
    // Return the array of items
    return rows;
  }

  async readfourResult() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `SELECT artwork.id,artwork.title,artwork.description,artwork.image,artwork.alt_artwork,artwork.id_artist,artist.firstname,artist.lastname FROM ${this.table} JOIN artist ON artwork.id_artist = artist.id ORDER BY RAND() LIMIT 4`
    );

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation

  async update(id, keys, value) {
    const updates = keys.map((key) => `${key} = ?`).join(", ");

    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET ${updates} WHERE id=${id}`,
      value
    );

    // Return the array of items
    return rows;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE from ${this.table} WHERE id=?`,
      [id]
    );

    // Return the array of items
    return rows;
  }
}

module.exports = ArtworkRepository;
