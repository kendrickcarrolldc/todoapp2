angular.module('toDoApp')

.service('toDoService', function($http) {
	 function getNotes($scope) {
        $http.get('/notes').success(response => {
            $scope.todos = response.notes;
        });
    }
	function addNotes($scope) {
		
		$scope.addNote = function() {
		console.log("adding note");
		alert("Im working")
		$scope.newNote = {};
      $scope.newNote.createdOn = Date.now();
      $scope.newNote.text = ' ';
      $scope.newNote.edit = true;
      $scope.notes.push($scope.newNote);
      $scope.newNote = {};
    
	};
	}
	function deleteNotes($scope) {
        $http.delete(`/todos/${todoToDelete._id}`).success(response => {
            getTasks($scope);
        });

        // _.remove($scope.todos, todo => todo.task === todoToDelete.task);
    }
})
$scope.notes = [];

	$scope.remove = function(note) { 
  var index = $scope.notes.indexOf(note);
  $scope.notes.splice(index, 1);     
}