const models = require("../models");

class ScoresTitleController {
  static browse = (req, res) => {
    models.scoreTitleQuizz
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.scoreTitleQuizz
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const score = req.body;

    // TODO validations (length, format...)

    score.id = parseInt(req.params.id, 10);

    models.scoreTitleQuizz
      .update(score)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = async (req, res) => {
    const { username, score } = req.body;

    // TODO validations (length, format...)
    try {
      const [result] = await models.scoreTitleQuizz.insert(username, score);
      const [rank] = await models.scoreTitleQuizz.findYourRank(result.insertId);
      res.status(201).send(rank);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static delete = (req, res) => {
    models.scoreTitleQuizz
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ScoresTitleController;
