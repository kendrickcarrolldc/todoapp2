var express = require('express');
var controller = require('./note.controller.js')
var router = express.Router();

router.get('/', controller.getAll)
router.post('/', controller.noteCtrl);
//router.post('/:id', controller.save);
module.exports = router;
