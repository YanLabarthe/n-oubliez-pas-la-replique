const AbstractManager = require("./AbstractManager");

class ScoresManager extends AbstractManager {
  static table = "scores";

  findAll() {
    return this.connection.query(
      `SELECT * FROM  ${this.table}  ORDER BY score DESC LIMIT ?`,
      [10]
    );
  }

  insert(username, score) {
    return this.connection.query(
      `INSERT INTO ${this.table} (username, score) VALUES (?, ?)`,
      [username, score]
    );
  }
}

module.exports = ScoresManager;
