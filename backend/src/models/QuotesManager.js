const AbstractManager = require("./AbstractManager");

class QuotesManager extends AbstractManager {
  static table = "quotes";
}

module.exports = QuotesManager;
