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
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [artwork.title, artwork.user_id]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID

    const [rows] = await this.database.query(
      `select artwork.id,artwork.title,artwork.description,artwork.image,artwork.alt_artwork,artwork.id_artist,artist.firstname,artist.lastname from ${this.table} INNER JOIN artist WHERE artwork.id_artist = artist.id AND artwork.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select artwork.id,artwork.title,artwork.description,artwork.image,artwork.alt_artwork,artwork.id_artist,artist.firstname,artist.lastname,artist.photo from ${this.table} INNER JOIN artist WHERE artwork.id = artist.id`
    );

    // Return the array of items
    return rows;
  }

  async read4Result() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select artwork.id,artwork.title,artwork.description,artwork.image,artwork.alt_artwork,artwork.id_artist,artist.firstname,artist.lastname from ${this.table} INNER JOIN artist WHERE artwork.id_artist = artist.id ORDER BY RAND() LIMIT 4`
    );

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ArtworkRepository;
