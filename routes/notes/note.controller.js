var note = require('./note.model')

module.exports = {
	getAll: function(req, res, next) {
		note.find({})
			.then(function(notes) {
			res.status(200).send(notes);
		})
		.catch(function(err) {
			console.log(err);
			next(err);
		})
	
},
	create: function(req, res, next) {
		note.create(req.body)
			.then(function(note) {
			res.status(200).send(note);
		})
		.catch(function(err) {
			console.log(err);
			next(err);
		})
	
}
}