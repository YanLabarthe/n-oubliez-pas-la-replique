const express = require("express");

const { ItemController } = require("./controllers");
const QuotesController = require("./controllers/QuotesController");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/quotes", QuotesController.browse);

module.exports = router;
