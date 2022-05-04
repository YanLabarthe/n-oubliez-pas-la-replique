const AbstractManager = require("./AbstractManager");

class MoviesManager extends AbstractManager {
  static table = "movies";

  insert(movies) {
    return this.connection.query(
      `insert into ${MoviesManager.table} (title) values (?)`,
      [movies.title]
    );
  }

  update(movies) {
    return this.connection.query(
      `update ${MoviesManager.table} set title = ? where id = ?`,
      [movies.title, movies.id]
    );
  }
}

module.exports = MoviesManager;
