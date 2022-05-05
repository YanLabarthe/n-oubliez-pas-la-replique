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

  findYourRank(scoreId) {
    return this.connection.query(
      `SELECT myrank FROM (SELECT *, RANK() OVER(ORDER by score DESC) myrank FROM ${this.table}) as ranking WHERE id = ?`,
      [scoreId]
    );
  }
}

module.exports = ScoresManager;
