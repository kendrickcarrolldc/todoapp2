angular.module('toDoApp')
.constant('baseUrl', "http://localhost:3000/notes/")
.controller("noteCtrl", function($scope, $http,$resource, baseUrl,toDoService) {
	
	$scope.notes=toDoService.notes;
	
//	
	$scope.addNote = function() {
		
			newNote = {};
     	
		toDoService.createNote(newNote);
//		$http.post(baseUrl, product).sucees(function(newProduct) {
//		
//			console.log("adding note");
//			alert("Im working")
//			$scope.newNote = {};
//      $scope.newNote.createdOn = Date.now();
//      $scope.newNote.text = ' ';
//      $scope.newNote.edit = true;
//      $scope.notes.push($scope.newNote);
//      $scope.newNote = {};	
//			
//		})
//		$scope.remove = function() { 

	}
	$scope.saveIt = function(note) {
		toDoService.updateNote(note);
	}
		$scope.remove = 
		toDoService.deleteNote;	
    
	
});
//	
//	$scope.kendrick="heres"
//		
//	
////		$scope.notes = [{
////      createdOn:1428237500771,
////      edit:false,
////			title: "",
////      text:""
////    }];
//	
//	$scope.notes = [];
//


//});
//	
//}