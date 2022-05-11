const AbstractManager = require("./AbstractManager");

class QuotesManager extends AbstractManager {
  static table = "quotes";

  findFour() {
    return this.connection.query(
      `SELECT DISTINCT title, content FROM ${QuotesManager.table} ORDER BY rand() LIMIT 4`
    );
  }
}

module.exports = QuotesManager;
