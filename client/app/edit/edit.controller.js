angular.module('toDoApp')

.controller("editCtrl", function($scope, toDoService, $state) {
	
$scope.noted = toDoService.editedNote; //edited note from todoservice 
	


	
$scope.addNote = function(newNote) {
newNote.created = new Date();		  
			toDoService.createNote(newNote);
		$state.go('addNote');

	}

		$scope.updateNote = function() {
		$scope.noted.editedNote = new Date();
		toDoService.updateNote();
			$state.go('addNote');
	}

		
});