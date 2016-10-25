var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({

	edit:Boolean,
	text: String
});

let note = mongoose.model('note', noteSchema)

module.exports = note;
