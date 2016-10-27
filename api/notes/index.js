var express = require("express");
var router = express.Router();
var controller = require("./note.controller.js");
//Restart Database
require("./index.js");


router.get("/",controller.getList);
router.post("/:id",controller.save);
router.post("/",controller.save);
router.delete("/:id",controller.delete);

module.exports = router;