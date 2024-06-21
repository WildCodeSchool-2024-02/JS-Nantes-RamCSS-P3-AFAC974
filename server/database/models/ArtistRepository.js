const AbstractRepository = require("./AbstractRepository");

class ArtistRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "artist" });
  }

  // The C of CRUD - Create operation

  async create(photo) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [photo.title, photo.user_id]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
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
      `select * from ${this.table} ORDER BY RAND() LIMIT 4`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE ${this.table} from ${this.table} JOIN artwork ON artwork.id=${this.table}.id WHERE ${this.table}.id=?`,
      [id]
    );




/*
DELETE table-name1
  FROM table-name1 
  JOIN table-name2 ON column-name3 = column-name4
 WHERE condition
 */









    // Return the array of items
    return rows;
  }
}

module.exports = ArtistRepository;
