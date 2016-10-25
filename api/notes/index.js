var express = require("express");
var router = express.Router();
var controller = require("./notes.model.js");
//Restart Database
require("./index.js");


router.get("/",controller.getNotes);
router.post("/:id",controller.add);
//router.post("/",controller.save);
//router.delete("/:id",controller.delete);

module.exports = router;