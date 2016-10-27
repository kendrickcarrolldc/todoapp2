



angular.module('toDoApp')

.constant('noteUrl', 'http://localhost:3000/notes/')
.service('toDoService', function($resource, noteUrl) {
	
	var self = this;
	
	this.notesResource = $resource(noteUrl + ":id", {
		id: "@_id"
	});
	
	this.notes = this.notesResource.query();
	
	
	this.deleteNote = function(note) {
		console.log("hello")
		note.$delete().then(function() {
			self.notes.splice(self.notes.indexOf(note), 1);
		})
	}
	
	this.createNote = function(note) {
		new self.notesResource(note).$save().then(function(newNote) {
			self.notes.push(newNote);
			self.editedNote = null;
		})
	}
	
	this.updateNote = function(note) {
		note.$save();
		this.editedNote = null;
	}
	this.startEdit = function(note) {
		this.editedNote = note;
	}
	
	this.cancelEdit = function() {
		this.editedNote = null;
	}
	});
//	 function getNotes($scope) {
//        $http.get('/notes').success(response => {
//            $scope.todos = response.notes;
//        });
//    }
//	function addNotes($scope) {
//		
//		$scope.addNote = function() {
//		console.log("adding note");
//		
//		$scope.newNote = {};
//      $scope.newNote.createdOn = Date.now();
//      $scope.newNote.text = ' ';
//      $scope.newNote.edit = true;
//      $scope.notes.push($scope.newNote);
//      $scope.newNote = {};
//    
//	};
//	}
//	function deleteNotes($scope) {
//      
//
//      
//    }
//})
//$scope.notes = [];
//
//	$scope.remove = function(note) { 
//  var index = $scope.notes.indexOf(note);
//  $scope.notes.splice(index, 1);     
//}