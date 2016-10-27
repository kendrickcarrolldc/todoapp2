var mongoose = require('mongoose');
var Schema = mongoose.Schema;											 

var noteSchema = new mongoose.Schema({
	title: {
		text: String,
		required: true
		
	},
	description: {
		text: String,
		required: true
	},
	created: {
		type: Number,
		required: true
	}
	
});

var Note = mongoose.model('note', noteSchema);
module.exports = Note;