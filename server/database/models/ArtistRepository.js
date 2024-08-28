const AbstractRepository = require("./AbstractRepository");

class ArtistRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "artist" as configuration
    super({ table: "artist" });
  }

  // The C of CRUD - Create operation

  async create(artist) {
    const photo = `images/photos/${artist.filename}`;
    // Execute the SQL INSERT query to add a new artist to the "artist" table
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, description, photo, alt_artist) values (?, ?, ?, ?, ?)`,
      [
        artist.firstname,
        artist.lastname,
        artist.description,
        photo,
        artist.alt_artist,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async readId() {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SHOW TABLE STATUS FROM apac974 like "artist"`
    );

    // Return the first row of the result, which represents the item
    return rows[0].Auto_increment + 1;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async readfourResult() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select * from ${this.table} ORDER BY RAND() LIMIT 4`
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
      `DELETE ${this.table} from ${this.table} JOIN artwork ON artwork.id=${this.table}.id WHERE ${this.table}.id=?`,
      [id]
    );

    // Return the array of items
    return rows;
  }
}

module.exports = ArtistRepository;
