const express = require("express");

const {
  ItemController,
  QuotesController,
  ScoresController,
  ScoresTitleController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/quotes", QuotesController.browse);
router.get("/quotes/findfour", QuotesController.findFour);

router.get("/scores", ScoresController.browse);
router.post("/scores", ScoresController.add);

router.get("/scores2", ScoresTitleController.browse);
router.post("/scores2", ScoresTitleController.add);

module.exports = router;
