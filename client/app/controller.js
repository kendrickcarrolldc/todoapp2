angular.module('toDoApp')
.constant('baseUrl', "http://localhost:3000/notes/")
.controller("noteCtrl", function($scope, $http,$resource, baseUrl) {
	
	
	$scope.addNote = function() {
		$http.post(baseUrl, product).sucees(function(newProduct) {
		
			console.log("adding note");
			alert("Im working")
			$scope.newNote = {};
      $scope.newNote.createdOn = Date.now();
      $scope.newNote.text = ' ';
      $scope.newNote.edit = true;
      $scope.notes.push($scope.newNote);
      $scope.newNote = {};	
			
		})
		
    
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
		$http({
			method: 'DELETE',
			url: baseUrl + product.id
		}).success(function() {
  var index = $scope.notes.indexOf(note);
  $scope.notes.splice(index, 1);     
});
	
}