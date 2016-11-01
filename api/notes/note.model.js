var mongoose = require('mongoose');
var Schema = mongoose.Schema;											 

var noteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
		
	},
	description: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		required: true
		
	},
	editedNote: {
		type: Date
}
	
});

var Note = mongoose.model('note', noteSchema);
module.exports = Note;


//Title: String,
//	Description: String