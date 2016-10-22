angular.module('toDoApp')
.controller("noteCtrl", function($scope, $state) {
	
	
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
	
	$scope.kendrick="heres"
		
	
//		$scope.notes = [{
//      createdOn:1428237500771,
//      edit:false,
//			title: "",
//      text:""
//    }];
	
	$scope.notes = [];

	$scope.remove = function(note) { 
  var index = $scope.notes.indexOf(note);
  $scope.notes.splice(index, 1);     
}
	
})