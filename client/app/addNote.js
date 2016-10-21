var routerApp = angular.module("toDoApp", ['ui.router'])
.controller("mainCtrl", function($scope) {
	
	
	$scope.addNote = function() {
		alert("Im working")
		$scope.newNote = {};
      $scope.newNote.createdOn = Date.now();
      $scope.newNote.text = ' ';
      $scope.newNote.edit = true;
      $scope.notes.push($scope.newNote);
      $scope.newNote = {};
    };
		
		$scope.notes = [];
    
	
	
//	
//	$scope.editNote = function {
//		
//	}
//	
//	$scope.deleteNote = function {
//		
//	}
	
})