var mongoose = require('mongoose');
var Schema = mongoose.Schema;											 

var noteSchema = new mongoose.Schema({
	title: {
		type: String
		
	},
	description: {
		type: String
		
	},
	created: {
		type: Date,
		required: true
	}
	
});

var Note = mongoose.model('note', noteSchema);
module.exports = Note;