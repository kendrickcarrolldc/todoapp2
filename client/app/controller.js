angular.module('toDoApp')
.constant('baseUrl', "http://localhost:3000/notes/")
.controller("noteCtrl", function($scope, $http,$resource, baseUrl,toDoService, $state) {
	
	$scope.notes=toDoService.notes;
	
	$scope.date = new Date();

	$scope.hideMe = function() {
	$scope.hide();
}
	$scope.addNote = function(newNote) {
		
			
//			create = new Date();
//			newNote.title = ' ';
//			newNote.description = ' ';
     
			toDoService.createNote(newNote);
		$state.go('addNote');
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
		$scope.addedit = function(note) {
		toDoService.updateNote(note);
	}
	
	
	$scope.saveIt = function(note) {
		toDoService.updateNote(note);
		console.log("hit save It")
		$state.go('addNote');
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