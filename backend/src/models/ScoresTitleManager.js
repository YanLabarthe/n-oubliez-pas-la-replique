const AbstractManager = require("./AbstractManager");

class ScoresTitleManager extends AbstractManager {
  static table = "scoreTitleQuizz";

  findAll() {
    return this.connection.query(
      `SELECT * FROM  ${ScoresTitleManager.table}  ORDER BY score DESC LIMIT ?`,
      [10]
    );
  }

  insert(username, score) {
    return this.connection.query(
      `INSERT INTO ${ScoresTitleManager.table} (username, score) VALUES (?, ?)`,
      [username, score]
    );
  }

  findYourRank(scoreId) {
    return this.connection.query(
      `SELECT myrank FROM (SELECT *, RANK() OVER(ORDER by score DESC) myrank FROM ${ScoresTitleManager.table}) as ranking WHERE id = ?`,
      [scoreId]
    );
  }
}

module.exports = ScoresTitleManager;
